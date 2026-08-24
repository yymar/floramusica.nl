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
 *
 * `schaal` maakt de balk breder dan de footerbalk (1 = footermaat) en mag
 * per segment verlopen: [begin, eind], geïnterpoleerd langs y. Aangrenzende
 * segmenten moeten op hun grens dezelfde schaal hebben, anders verspringt
 * de waaier — dezelfde regel als voor de gedeelde x. Het contact-segment
 * tapert zo naar exact 1 op de landing in de footer.
 */

export type Punt = { x: number; y: number };

export interface StengelSegment {
  /** Waypoints in procenten van de sectie (x 0–100, y 0–100, van boven naar beneden). */
  punten: Punt[];
  /** Breedteschaal t.o.v. de footerbalk: [bij y=0, bij y=100]. Default [1, 1]. */
  schaal?: [number, number];
  /** Houd de beginschaal vast tot deze y en verloop pas daarna (taper). */
  taperVanafY?: number;
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

/** Breedteschaal op hoogte y (0–100) van het segment. */
export function schaalOp(segment: StengelSegment, y: number): number {
  const [s0, s1] = segment.schaal ?? [1, 1];
  const vanaf = segment.taperVanafY ?? 0;
  if (y <= vanaf) return s0;
  return s0 + ((s1 - s0) * (y - vanaf)) / (100 - vanaf);
}

/**
 * De lijnafstand op footermaat, in x-eenheden (procent van de
 * sectiebreedte): 5/12% is exact de lijnafstand van de footerbalk
 * (2 van 24 eenheden op een balk van breedte/20 hoog).
 */
export const TUSSEN = 5 / 12;

/**
 * De vijf paden van een segment, als d-strings. De offset per lijn is de
 * footermaat maal de (per waypoint geïnterpoleerde) segmentschaal.
 */
export function stengelPaden(segment: StengelSegment, lijnen = 5): string[] {
  const p = segment.punten;
  const t = raaklijnen(p, segment.beginVrij ?? false, segment.eindVrij ?? false);
  const s = p.map((punt) => schaalOp(segment, punt.y));
  const offsets = Array.from({ length: lijnen }, (_, i) => (i - (lijnen - 1) / 2) * TUSSEN);

  return offsets.map((off) => {
    let d = `M${f(p[0].x + off * s[0])},${f(p[0].y)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const c1x = p[i].x + t[i].x / 3 + off * s[i];
      const c1y = p[i].y + t[i].y / 3;
      const c2x = p[i + 1].x - t[i + 1].x / 3 + off * s[i + 1];
      const c2y = p[i + 1].y - t[i + 1].y / 3;
      d += `C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p[i + 1].x + off * s[i + 1])},${f(p[i + 1].y)}`;
    }
    return d;
  });
}

/**
 * Punt op de middellijn bij parameter t (0–1 over de hele waypoint-keten),
 * plus de schaal daar. Voor loten op t-waardes: de kromme gaat hier exact
 * doorheen, dus een loot raakt de lijn op elke breedte.
 */
export function stengelPunt(segment: StengelSegment, tGlobaal: number): Punt & { schaal: number } {
  const p = segment.punten;
  const tang = raaklijnen(p, segment.beginVrij ?? false, segment.eindVrij ?? false);
  const stukken = p.length - 1;
  const j = Math.min(stukken - 1, Math.floor(tGlobaal * stukken));
  const u = tGlobaal * stukken - j;

  const p0 = p[j];
  const p3 = p[j + 1];
  const c1 = { x: p0.x + tang[j].x / 3, y: p0.y + tang[j].y / 3 };
  const c2 = { x: p3.x - tang[j + 1].x / 3, y: p3.y - tang[j + 1].y / 3 };
  const w = 1 - u;
  const x = w * w * w * p0.x + 3 * w * w * u * c1.x + 3 * w * u * u * c2.x + u * u * u * p3.x;
  const y = w * w * w * p0.y + 3 * w * w * u * c1.y + 3 * w * u * u * c2.y + u * u * u * p3.y;
  return { x, y, schaal: schaalOp(segment, y) };
}
