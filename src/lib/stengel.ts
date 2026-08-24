/**
 * De stengel: een vijflijnige notenbalk die als slingerpad verticaal door de
 * pagina golft. Gegenereerd, niet als asset: de secties hebben variabele
 * hoogtes, dus het pad moet zich aanpassen aan de echte layout. Dit is
 * dezelfde geometrie waarmee de lintassets ooit zijn gebouwd — vijf lijnen
 * uitgewaaierd vanuit één middellijn — maar dan responsief.
 *
 * Elk segment leeft in de genormaliseerde ruimte van zijn eigen sectie
 * (viewBox 0 0 100 100, preserveAspectRatio="none"). Dat rekt verticaal mee
 * met de sectiehoogte, en dat mag, omdat elke sectiegrens met een exact
 * verticale raaklijn wordt gekruist: rek in y verandert een verticale lijn
 * niet. Twee aangrenzende segmenten die op dezelfde x de grens raken sluiten
 * daardoor op elke schermbreedte en bij elke inhoudshoogte vloeiend aan —
 * hetzelfde ketenprincipe als de lint-tegels a→b, maar responsief.
 *
 * De vijf lijnen zijn horizontale verschuivingen van de middellijn, niet
 * offsets langs de normaal. Zo zijn de linten zelf ook getekend (de vijf
 * lijnen in de stafflines-laag liggen elk 2 eenheden lager), en het maakt
 * de verschuiving immuun voor de verticale rek.
 */

export type Punt = { x: number; y: number };

export interface StengelSegment {
  /** Waypoints in procenten van de sectie (x 0–100, y 0–100, van boven naar beneden). */
  punten: Punt[];
  /** Begin niet verticaal forceren (los begin, bv. onder de bloem). */
  beginVrij?: boolean;
  /** Einde niet verticaal forceren (uitloop, bv. richting de footerbalk). */
  eindVrij?: boolean;
}

/** Raaklijn per punt: Catmull-Rom binnenin, verticaal op de uiteinden. */
function raaklijnen(p: Punt[], beginVrij: boolean, eindVrij: boolean): Punt[] {
  const n = p.length;
  return p.map((_, i) => {
    if (i === 0) {
      return beginVrij
        ? { x: p[1].x - p[0].x, y: p[1].y - p[0].y }
        : { x: 0, y: (p[1].y - p[0].y) * 1.5 };
    }
    if (i === n - 1) {
      return eindVrij
        ? { x: p[i].x - p[i - 1].x, y: p[i].y - p[i - 1].y }
        : { x: 0, y: (p[i].y - p[i - 1].y) * 1.5 };
    }
    return { x: (p[i + 1].x - p[i - 1].x) / 2, y: (p[i + 1].y - p[i - 1].y) / 2 };
  });
}

const f = (n: number) => String(Math.round(n * 100) / 100);

/**
 * De vijf paden van een segment, als d-strings. `tussen` is de lijnafstand in
 * x-eenheden (procent van de sectiebreedte); 5/12% is exact de lijnafstand
 * van de footerbalk (2 van 24 eenheden op een balk van breedte/20 hoog),
 * zodat stengel en balk als één tekening lezen.
 */
export function stengelPaden(segment: StengelSegment, lijnen = 5, tussen = 5 / 12): string[] {
  const p = segment.punten;
  const t = raaklijnen(p, segment.beginVrij ?? false, segment.eindVrij ?? false);
  const offsets = Array.from({ length: lijnen }, (_, i) => (i - (lijnen - 1) / 2) * tussen);

  return offsets.map((off) => {
    let d = `M${f(p[0].x + off)},${f(p[0].y)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const c1x = p[i].x + t[i].x / 3 + off;
      const c1y = p[i].y + t[i].y / 3;
      const c2x = p[i + 1].x - t[i + 1].x / 3 + off;
      const c2y = p[i + 1].y - t[i + 1].y / 3;
      d += `C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p[i + 1].x + off)},${f(p[i + 1].y)}`;
    }
    return d;
  });
}
