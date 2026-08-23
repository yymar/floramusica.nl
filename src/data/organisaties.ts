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
  {
    naam: "Muzelinck, centrum voor de kunsten",
    plaats: "Oss",
    url: "https://www.muzelinck.nl/",
  },
  { naam: "MDM", plaats: "Vught", url: "https://www.mdm.nl/" },
  { naam: "Medez", plaats: "Berlicum", url: "https://www.medez.nl/" },
  {
    naam: "Muziekvereniging EMM",
    plaats: "Boekel",
    url: "https://www.muziekverenigingemm.nl/",
  },
  {
    naam: "Muziekvereniging Zeelandia",
    plaats: "Zeeland",
    url: "https://muziekvereniging-zeelandia.nl/",
  },
  {
    naam: "Phoenix Cultuur",
    plaats: "Veghel",
    url: "https://www.phoenixcultuur.nl/",
  },
];
