/**
 * De route van de stengel, per sectie. x en y in procenten van de sectie.
 *
 * Regels bij het routeren:
 * - elke sectiegrens wordt verticaal gekruist, en de uittree-x én de
 *   uittree-schaal van een segment zijn exact de intree-waarden van het
 *   volgende (zie lib/stengel.ts);
 * - de stengel kruist nooit een foto of een gevuld vlak (daar zou hij als
 *   z-index -1 achter verdwijnen), wel lopende tekst — op de lagere dekking;
 * - hij begint onder de omslagrand, precies waar de beker van de klarinet
 *   onderduikt (het motief wordt daar door .balk-clip afgesneden), en landt
 *   aan het eind via de aanloop in de footer op de liggende balk.
 *
 * Schaal: 1 = de footerbalk. De stengel loopt op 1.5–2× (2 in de lege
 * Beelden-marge) en tapert in Contact naar exact 1, zodat hij naadloos de
 * liggende balk wordt.
 *
 * `loten` zijn de uitlopers: noten, takjes en bloemen die uit de stengel
 * groeien, zoals de noten en bladvlaggen uit de footerbalk. Op t-waardes
 * langs het pad (de kromme gaat daar exact doorheen), om en om links en
 * rechts (`kant`), dichtheid onder die van de footer — de finale blijft
 * het rijkst.
 */
import type { StengelSegment } from '../lib/stengel';
import type { TakjeNaam } from '../components/ornaments/svg';

export type Loot = { t: number; naam: TakjeNaam; kant: -1 | 1; draai?: number };
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
    schaal: [1.5, 2],
    loten: [
      { t: 0.22, naam: 'tak-blad', kant: 1, draai: 25 },
      { t: 0.52, naam: 'noten-blad', kant: -1, draai: -10 },
      { t: 0.68, naam: 'bloem-knop', kant: -1, draai: -20 },
      { t: 0.88, naam: 'noten-blad', kant: 1, draai: 15 },
    ],
  },
  // Achter de witruimte van de kop langs naar de buitenmarge van het grid —
  // lege marge, dus hier is de stengel op zijn breedst.
  beelden: {
    punten: [
      { x: 65, y: 0 },
      { x: 83, y: 12 },
      { x: 90, y: 38 },
      { x: 90, y: 72 },
      { x: 86, y: 100 },
    ],
    schaal: [2, 1.75],
    loten: [
      { t: 0.25, naam: 'noten-blad', kant: 1, draai: 10 },
      { t: 0.55, naam: 'tak-blad', kant: 1, draai: 14 },
      { t: 0.82, naam: 'bloem-open', kant: -1, draai: -15 },
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
    schaal: [1.75, 1.5],
    loten: [
      { t: 0.42, naam: 'bloem-knop', kant: -1, draai: -12 },
      { t: 0.62, naam: 'noten-blad', kant: 1, draai: 12 },
      { t: 0.85, naam: 'tak-blad', kant: -1, draai: -22 },
    ],
  },
  locatie: {
    punten: [
      { x: 25, y: 0 },
      { x: 45, y: 28 },
      { x: 58, y: 55 },
      { x: 54, y: 82 },
      { x: 48, y: 100 },
    ],
    schaal: [1.5, 1.5],
    // In de goot boven en de sectievoet onder: het middenstuk kruist de
    // organisatielijst, daar horen geen loten op de tekst.
    loten: [
      { t: 0.12, naam: 'noten-blad', kant: -1, draai: -18 },
      { t: 0.9, naam: 'tak-blad', kant: 1, draai: 15 },
    ],
  },
  praktisch: {
    punten: [
      { x: 48, y: 0 },
      { x: 60, y: 35 },
      { x: 72, y: 70 },
      { x: 78, y: 100 },
    ],
    schaal: [1.5, 1.5],
    loten: [
      { t: 0.38, naam: 'bloem-knop', kant: 1, draai: 15 },
      { t: 0.74, naam: 'noten-blad', kant: -1, draai: -12 },
    ],
  },
  // Langs de rechtergoot omlaag, dan de brede zwaai naar linksonder. Het
  // einde is verticaal op x 6, getaperd naar schaal 1: exact waar de
  // aanloop in de footer begint, die de vijf lijnen op de liggende balk
  // laat landen (zie Footer.astro).
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
    schaal: [1.5, 1],
    taperVanafY: 55,
    loten: [
      { t: 0.18, naam: 'tak-blad', kant: 1, draai: 15 },
      { t: 0.48, naam: 'noten-blad', kant: 1, draai: 20 },
      { t: 0.78, naam: 'bloem-knop', kant: -1, draai: -25 },
    ],
  },
};
