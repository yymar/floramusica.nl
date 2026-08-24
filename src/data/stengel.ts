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
import type { TakjeNaam } from '../components/ornaments/svg';

export type StengelDeel = 'over' | 'beelden' | 'lessen' | 'locatie' | 'praktisch' | 'contact';

/** Breedte (lijnafstand) t.o.v. de footerbalk — constant over de hele route. */
export const SCHAAL = 1.75;
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
export type Loot = { deel: StengelDeel; y: number; kant: -1 | 1; naam: TakjeNaam; draai: number };

export const loten: Loot[] = [
  { deel: 'over', y: 30, kant: 1, naam: 'tak-blad', draai: 20 },
  { deel: 'over', y: 62, kant: -1, naam: 'noten-blad', draai: -12 },
  { deel: 'beelden', y: 22, kant: 1, naam: 'noten-blad', draai: 10 },
  { deel: 'beelden', y: 52, kant: 1, naam: 'bloem-open', draai: 15 },
  { deel: 'beelden', y: 80, kant: 1, naam: 'tak-blad', draai: 12 },
  { deel: 'lessen', y: 38, kant: -1, naam: 'bloem-knop', draai: -15 },
  { deel: 'lessen', y: 64, kant: 1, naam: 'noten-blad', draai: 12 },
  { deel: 'locatie', y: 28, kant: -1, naam: 'noten-blad', draai: -15 },
  { deel: 'locatie', y: 62, kant: 1, naam: 'tak-blad', draai: 12 },
  { deel: 'praktisch', y: 42, kant: 1, naam: 'bloem-knop', draai: 15 },
  { deel: 'contact', y: 34, kant: -1, naam: 'tak-blad', draai: -12 },
  { deel: 'contact', y: 66, kant: 1, naam: 'noten-blad', draai: 18 },
];
