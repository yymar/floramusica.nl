/**
 * Handige links van Christa, onder Praktisch. `url` weglaten = alleen
 * vermelding (de site van Klarinetatelier Arnhem werkt op dit moment niet).
 */
import { taalVan } from './copy';

export interface HandigeLink {
  naam: string;
  url?: string;
  omschrijving: string;
}

const links = {
  nl: [
    { naam: 'Klarinetatelier Arnhem', omschrijving: 'Voor zeer goed onderhoud en revisie van je klarinet' },
    { naam: 'Goedkope Rieten', url: 'https://www.goedkoperieten.nl/', omschrijving: 'Voor klarinetrieten en -accessoires' },
    { naam: 'Broekmans & Van Poppel', url: 'https://www.broekmans.com/', omschrijving: 'Voor al je bladmuziek' },
    { naam: 'De Klarinet', url: 'https://deklari.net/', omschrijving: 'Tijdschrift met alles wat je wilt weten over de klarinet' },
  ],
  en: [
    { naam: 'Klarinetatelier Arnhem', omschrijving: 'For excellent maintenance and overhaul of your clarinet' },
    { naam: 'Goedkope Rieten', url: 'https://www.goedkoperieten.nl/', omschrijving: 'For clarinet reeds and accessories' },
    { naam: 'Broekmans & Van Poppel', url: 'https://www.broekmans.com/', omschrijving: 'For all your sheet music' },
    { naam: 'De Klarinet', url: 'https://deklari.net/', omschrijving: 'Dutch magazine with everything about the clarinet' },
  ],
} satisfies Record<string, HandigeLink[]>;

export const handigeLinks = (locale?: string): HandigeLink[] => links[taalVan(locale)];
