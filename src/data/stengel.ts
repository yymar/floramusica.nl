/**
 * De route van de stengel, per sectie. x en y in procenten van de sectie.
 *
 * Regels bij het routeren:
 * - elke sectiegrens wordt verticaal gekruist, en de uittree-x van een
 *   segment is exact de intree-x van het volgende (zie lib/stengel.ts);
 * - de stengel kruist nooit een foto of een gevuld vlak (daar zou hij als
 *   z-index -1 achter verdwijnen), wel lopende tekst — op 8% dekking;
 * - onder de bloem (het hero-motief) begint hij, op de liggende footerbalk
 *   mikt hij aan het eind.
 *
 * `loten` zijn de spaarzame uitlopers: een takje of noot dat op een waypoint
 * uit de stengel groeit. Op een waypoint, want daar gaat de kromme exact
 * doorheen.
 */
import type { StengelSegment } from '../lib/stengel';
import type { TakjeNaam } from '../components/ornaments/svg';

export type Loot = { x: number; y: number; naam: TakjeNaam; draai?: number };
export type StengelDeel = 'omslag' | 'over' | 'beelden' | 'lessen' | 'locatie' | 'praktisch' | 'contact';

export const stengel: Record<StengelDeel, StengelSegment & { loten?: Loot[] }> = {
  // Onder de beker van de klarinet vandaan, de omslagrand onder. Het
  // beginpunt ligt binnen het vlak dat het motief op élke breedte beslaat
  // (het motief schaalt met de marge), zodat de stengel altijd achter de
  // bloem vandaan komt en er nooit overheen kruist.
  omslag: {
    punten: [
      { x: 92.5, y: 74 },
      { x: 90, y: 87 },
      { x: 87, y: 100 },
    ],
    beginVrij: true,
  },
  // Naar links door de open linkerhelft, langs de open kant van de foto.
  over: {
    punten: [
      { x: 87, y: 0 },
      { x: 52, y: 26 },
      { x: 27, y: 48 },
      { x: 24, y: 66 },
      { x: 42, y: 86 },
      { x: 65, y: 100 },
    ],
    loten: [{ x: 24, y: 66, naam: 'noten-blad', draai: -14 }],
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
  // Langs de rechtergoot omlaag, dan de brede zwaai naar linksonder: de
  // uitloop mikt op de linker intree van de liggende footerbalk.
  contact: {
    punten: [
      { x: 78, y: 0 },
      { x: 87, y: 22 },
      { x: 88, y: 52 },
      { x: 60, y: 80 },
      { x: 22, y: 93 },
      { x: 6, y: 100 },
    ],
    eindVrij: true,
    loten: [{ x: 88, y: 52, naam: 'tak-blad', draai: 12 }],
  },
};
