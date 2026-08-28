/**
 * Tarieven en lesvormen. Alles hieronder is placeholder-structuur:
 * TODO: tarieven en lesduur aanleveren, dan `bekend: true` zetten.
 * Zolang `bekend: false` is, toont de site "op aanvraag" in plaats van bedragen.
 */

export interface Lesvorm {
  naam: string;
  /** Bijvoorbeeld "30 minuten, wekelijks". TODO: invullen. */
  duur: string;
  /** Bijvoorbeeld "€ 00 per les" of "€ 000 per 10 lessen". TODO: invullen. */
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
    // TODO: bijv. "Een proefles is altijd mogelijk." of iets over btw-vrijstelling onder 21 jaar.
  ],
});
