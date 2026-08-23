/**
 * Praktijkgegevens. Dit is de enige plek waar adres- en contactgegevens staan;
 * de componenten en de JSON-LD lezen alles hieruit.
 */

export interface Adres {
  straat: string;
  postcode: string;
  plaats: string;
  provincie: string;
  land: string;
  /** Gewone link naar Google Maps, geen iframe. */
  kaartUrl: string;
}

export interface SiteGegevens {
  naam: string;
  /** Korte omschrijving voor <meta name="description"> en social cards. */
  omschrijving: string;
  url: string;
  regio: string;
  adres: Adres;
  /** TODO: e-mailadres aanleveren. Leeg laten tot het bekend is. */
  email: string;
  /** TODO: telefoonnummer aanleveren. Leeg laten tot het bekend is. */
  telefoon: string;
  /** TODO: KvK-nummer aanleveren. Leeg laten tot het bekend is. */
  kvk: string;
}

export const site: SiteGegevens = {
  naam: 'Muziekpraktijk Flora Musica',
  omschrijving:
    'Muziekles in Oss en omgeving: klarinet, basklarinet, saxofoon, piano en blokfluit. Voor kinderen, jongeren en volwassenen, in de lespraktijk aan de Floraliastraat in Oss.',
  url: 'https://floramusica.nl',
  regio: 'Oss en omgeving',
  adres: {
    straat: 'Floraliastraat 68',
    postcode: '', // TODO: postcode aanleveren
    plaats: 'Oss',
    provincie: 'Noord-Brabant',
    land: 'NL',
    kaartUrl: 'https://www.google.com/maps/search/?api=1&query=Floraliastraat+68,+Oss',
  },
  email: '', // TODO: e-mailadres
  telefoon: '', // TODO: telefoonnummer
  kvk: '', // TODO: KvK-nummer
};
