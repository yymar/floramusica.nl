/**
 * De route van de stengel, per sectie. x en y in procenten van de sectie.
 *
 * Regels bij het routeren:
 * - elke sectiegrens wordt verticaal gekruist, en de uittree-x van een
 *   segment is exact de intree-x van het volgende (zie lib/stengel.ts);
 * - de stengel kruist nooit een foto of een gevuld vlak (daar zou hij als
 *   z-index -1 achter verdwijnen), wel lopende tekst — op lage dekking;
 * - hij begint onder de omslagrand, precies waar de beker van de klarinet
 *   onderduikt (het motief wordt daar door .balk-clip afgesneden), en landt
 *   aan het eind via de aanloop in de footer op de liggende balk.
 *
 * `loten` zijn de spaarzame uitlopers: een takje of noot dat op een waypoint
 * uit de stengel groeit. Op een waypoint, want daar gaat de kromme exact
 * doorheen.
 */
import type { StengelSegment } from '../lib/stengel';
import type { TakjeNaam } from '../components/ornaments/svg';

export type Loot = { x: number; y: number; naam: TakjeNaam; draai?: number };
export type StengelDeel = 'over' | 'beelden' | 'lessen' | 'locatie' | 'praktisch' | 'contact';

export const stengel: Record<StengelDeel, StengelSegment & { loten?: Loot[] }> = {
  // Verticaal onder de beker vandaan (x 93 ligt op elke breedte binnen de
  // bekervoet van het motief), dan naar links door de open linkerhelft,
  // langs de open kant van de foto.
  over: {
    punten: [
      { x: 93, y: 0 },
      { x: 52, y: 26 },
      { x: 27, y: 48 },
      { x: 24, y: 66 },
      { x: 42, y: 86 },
      { x: 65, y: 100 },
    ],
    loten: [
      { x: 52, y: 26, naam: 'tak-blad', draai: 24 },
      { x: 24, y: 66, naam: 'noten-blad', draai: -14 },
    ],
  },
  // Achter de witruimte van de kop langs naar de buitenmarge van het grid.
  beelden: {
    punten: [
      { x: 65, y: 0 },
      { x: 83, y: 12 },
      { x: 90, y: 38 },
      { x: 90, y: 72 },
      { x: 86, y: 100 },
    ],
    loten: [{ x: 90, y: 72, naam: 'bloem-open', draai: -18 }],
  },
  // Boven het bordeaux vlak langs naar links, dan een rustige S omlaag.
  lessen: {
    punten: [
      { x: 86, y: 0 },
      { x: 55, y: 8 },
      { x: 24, y: 17 },
      { x: 14, y: 42 },
      { x: 16, y: 72 },
      { x: 25, y: 100 },
    ],
    loten: [{ x: 14, y: 42, naam: 'bloem-knop', draai: 10 }],
  },
  locatie: {
    punten: [
      { x: 25, y: 0 },
      { x: 45, y: 28 },
      { x: 58, y: 55 },
      { x: 54, y: 82 },
      { x: 48, y: 100 },
    ],
  },
  praktisch: {
    punten: [
      { x: 48, y: 0 },
      { x: 60, y: 35 },
      { x: 72, y: 70 },
      { x: 78, y: 100 },
    ],
  },
  // Langs de rechtergoot omlaag, dan de brede zwaai naar linksonder. Het
  // einde is verticaal op x 6: exact waar de aanloop in de footer begint,
  // die de vijf lijnen op de liggende balk laat landen (zie Footer.astro).
  contact: {
    punten: [
      { x: 78, y: 0 },
      { x: 87, y: 22 },
      { x: 88, y: 48 },
      { x: 70, y: 70 },
      { x: 36, y: 84 },
      { x: 12, y: 92 },
      { x: 6, y: 100 },
    ],
    loten: [{ x: 88, y: 48, naam: 'tak-blad', draai: 12 }],
  },
};
