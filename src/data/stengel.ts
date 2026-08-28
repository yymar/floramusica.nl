/**
 * De route van de stengel: één globale definitie, één object.
 *
 * Waypoints zijn ankers (x in % van de vensterbreedte, y in % van de
 * genoemde sectie); StengelBaan.astro meet de echte sectieposities en bouwt
 * er runtime één doorlopend pad van, in pixels. Breedte, dikte, kleur,
 * dekking en de reveal komen allemaal uit deze ene definitie — segmenten
 * die van elkaar kunnen verschillen bestaan niet meer.
 *
 * Regels bij het routeren (hard, zie de audit in de summary):
 * - ≥ 48px vrij van elk tekstblok en formulierveld op 1280–2560: de stengel
 *   loopt door marges en gootjes, en kruist de contentkolom alleen in de
 *   witruimte tussen secties;
 * - nooit over een foto of gevuld vlak;
 * - minimale bochtstraal ≥ 2× de totale linthoogte — liever een waypoint
 *   verleggen dan knijpen.
 *
 * De maten zelf komen uit de footerbalk (de bronwaarheid): lijnafstand en
 * -dikte worden runtime van het slot gemeten en met SCHAAL vermenigvuldigd.
 */
import type { TekeningNaam } from '../components/ornaments/tekeningen';

export type StengelDeel = 'over' | 'beelden' | 'lessen' | 'locatie' | 'praktisch' | 'contact';

/**
 * Breedte (lijnafstand) t.o.v. de footerbalk — constant over de hele route.
 * Op 1: het lint is overal exact even breed en dicht als de footerbalk,
 * één gewicht van beker tot eindstreep (de 1.75 van eerst maakte de lange
 * stukken visueel ijler dan de landing). De eindtaper is hiermee inert
 * maar blijft staan voor als de schaal ooit weer omhoog gaat.
 */
export const SCHAAL = 1;
/** Lijndikte t.o.v. de gemiddelde banddikte van de footerbalk. */
export const DIKTE = 1.5;
/** Dekking; de footerbalk zelf staat op 0.5. */
export const DEKKING = 0.5;
/** De enige breedteverandering op de pagina: de laatste ~400px arc naar de landing. */
export const TAPER_PX = 400;

/**
 * `klem: 'rechts'` betekent: dit anker ligt in de rechtermarge en wordt
 * runtime geklemd tussen (contentkolom + 70px) en de vensterrand — op
 * 1280 is de marge te smal voor een vast percentage, op 2560 te breed.
 */
export type Anker = { deel: StengelDeel; x: number; y: number; klem?: 'rechts' };

/**
 * Serpentine: rechtermarge (Over, Beelden) → kruising in de witruimte boven
 * Lessen → linkergoot (Lessen, Locatie) → kruising boven Praktisch →
 * rechtermarge → kruising boven Contact → linkergoot → landing op de balk.
 */
export const route: Anker[] = [
  { deel: 'over', x: 93, y: 0, klem: 'rechts' },
  { deel: 'over', x: 90, y: 40, klem: 'rechts' },
  { deel: 'over', x: 88, y: 78, klem: 'rechts' },
  { deel: 'beelden', x: 89, y: 6, klem: 'rechts' },
  { deel: 'beelden', x: 92.5, y: 36, klem: 'rechts' },
  { deel: 'beelden', x: 93, y: 70, klem: 'rechts' },
  { deel: 'beelden', x: 92, y: 88, klem: 'rechts' },
  { deel: 'beelden', x: 88, y: 96, klem: 'rechts' },
  { deel: 'beelden', x: 60, y: 98.6 },
  { deel: 'beelden', x: 42, y: 99.6 },
  { deel: 'lessen', x: 18, y: 5 },
  { deel: 'lessen', x: 15, y: 20 },
  { deel: 'lessen', x: 14, y: 48 },
  { deel: 'lessen', x: 15, y: 74 },
  { deel: 'locatie', x: 16, y: 12 },
  { deel: 'locatie', x: 15, y: 45 },
  { deel: 'locatie', x: 15, y: 82 },
  { deel: 'locatie', x: 40, y: 98.3 },
  { deel: 'locatie', x: 72, y: 99.5 },
  { deel: 'praktisch', x: 88, y: 25, klem: 'rechts' },
  { deel: 'praktisch', x: 88, y: 55, klem: 'rechts' },
  { deel: 'praktisch', x: 78, y: 92 },
  { deel: 'praktisch', x: 42, y: 97 },
  { deel: 'praktisch', x: 22, y: 99.6 },
  { deel: 'contact', x: 10, y: 14 },
  { deel: 'contact', x: 8, y: 40 },
  { deel: 'contact', x: 7, y: 64 },
  { deel: 'contact', x: 6.5, y: 78 },
];

/**
 * Loten: uitlopers zoals de noten en bladvlaggen op de footerbalk. `y` is
 * de sectiehoogte-fractie; de x volgt runtime uit het pad op die hoogte,
 * `kant` zet ze links (−1) of rechts (+1) nét buiten de buitenste lijn.
 * Dichtheid onder die van de footer — de finale blijft het rijkst.
 */
export type Loot = {
  deel: StengelDeel;
  y: number;
  kant: -1 | 1;
  naam: TekeningNaam;
  draai: number;
  /** Breedte in rem; standaard 2.5. Bloemen mogen iets groter, los blad iets kleiner. */
  maat?: number;
};

export const loten: Loot[] = [
  { deel: 'over', y: 18, kant: 1, naam: 'blad-1', draai: 20, maat: 2 },
  { deel: 'over', y: 44, kant: -1, naam: 'noot-3', draai: -12 },
  { deel: 'over', y: 72, kant: 1, naam: 'noot-1', draai: 14, maat: 1.6 },
  { deel: 'beelden', y: 16, kant: 1, naam: 'noot-5', draai: 10 },
  { deel: 'beelden', y: 38, kant: -1, naam: 'blad-2', draai: -16, maat: 2 },
  { deel: 'beelden', y: 56, kant: 1, naam: 'bloem-1', draai: 15, maat: 3 },
  { deel: 'beelden', y: 78, kant: 1, naam: 'noot-7', draai: 12, maat: 2.75 },
  { deel: 'beelden', y: 92, kant: -1, naam: 'blad-1', draai: -24, maat: 1.8 },
  { deel: 'lessen', y: 24, kant: -1, naam: 'noot-3', draai: -15 },
  { deel: 'lessen', y: 48, kant: 1, naam: 'bloem-2', draai: 10, maat: 2.75 },
  { deel: 'lessen', y: 70, kant: 1, naam: 'noot-1', draai: 12, maat: 1.6 },
  { deel: 'locatie', y: 20, kant: -1, naam: 'noot-5', draai: -15, maat: 2.75 },
  { deel: 'locatie', y: 46, kant: 1, naam: 'blad-1', draai: 18, maat: 2 },
  { deel: 'locatie', y: 70, kant: 1, naam: 'noot-3', draai: 12 },
  { deel: 'praktisch', y: 30, kant: 1, naam: 'bloem-1', draai: 15, maat: 2.75 },
  { deel: 'praktisch', y: 58, kant: -1, naam: 'blad-2', draai: -14, maat: 2 },
  { deel: 'contact', y: 26, kant: -1, naam: 'blad-1', draai: -12, maat: 2 },
  { deel: 'contact', y: 50, kant: 1, naam: 'noot-7', draai: 18, maat: 2.75 },
  { deel: 'contact', y: 74, kant: 1, naam: 'noot-1', draai: 10, maat: 1.6 },
];
