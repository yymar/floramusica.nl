/**
 * Organisaties waarvoor wordt gewerkt. Tekstuele lijst als vertrouwenssignaal,
 * geen logowall. `url` is optioneel; alleen zetten als er een goede site is.
 */

export interface Organisatie {
  naam: string;
  plaats?: string;
  url?: string;
}

export const organisaties: Organisatie[] = [
  { naam: 'Muzelinck, centrum voor de kunsten', plaats: 'Oss', url: 'https://www.muzelinck.nl/' },
  { naam: 'MDM', plaats: 'Vught' },
  { naam: 'Medez', plaats: 'Berlicum' },
  { naam: 'Muziekvereniging EMM', plaats: 'Boekel' },
  { naam: 'Muziekvereniging Zeelandia' }, // TODO: plaats bevestigen
  { naam: 'Phoenix Cultuur' }, // TODO: plaats bevestigen
];
