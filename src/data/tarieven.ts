/**
 * Lesvormen. Bedragen komen bewust níet op de site (keuze van Christa):
 * `prijs` leeg laten, dan toont de site "op aanvraag". Lesduur en
 * opmerkingen over (proef)lessen mogen wel; zet dan `bekend: true`.
 */

export interface Lesvorm {
  naam: string;
  /** Bijvoorbeeld "30 minuten, wekelijks". TODO: invullen. */
  duur: string;
  /** Blijft leeg: bedragen staan niet op de site. */
  prijs: string;
}

export interface Tarieven {
  /** Op false blijven staan tot echte bedragen zijn ingevuld. */
  bekend: boolean;
  lesvormen: Lesvorm[];
  /** Losse praktische opmerkingen, bijv. over proefles of btw. */
  opmerkingen: string[];
}

import { taalVan } from './copy';

export const tarieven = (locale?: string): Tarieven => ({
  bekend: false,
  lesvormen:
    taalVan(locale) === 'en'
      ? [
          { naam: 'Weekly lesson', duur: '', prijs: '' }, // TODO
          { naam: 'Fortnightly lesson', duur: '', prijs: '' }, // TODO
        ]
      : [
          { naam: 'Wekelijkse les', duur: '', prijs: '' }, // TODO
          { naam: 'Les om de week', duur: '', prijs: '' }, // TODO
        ],
  opmerkingen: [
    // TODO: bijv. iets over de proefles, zodra Christa dat aanlevert.
  ],
});
