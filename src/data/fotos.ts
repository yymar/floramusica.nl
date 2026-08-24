/**
 * De galerij: foto's uit en rond de lespraktijk, getoond als editoriale
 * spread (pagina's uit het programmaboekje) in src/sections/Galerij.astro.
 *
 * Foto toevoegen of vervangen:
 *   1. Zet het bestand in src/assets/fotos/
 *   2. Importeer het hieronder en vul src, alt en eventueel onderschrift in.
 *
 * De volgorde in deze lijst is de volgorde op de pagina; `formaat` bepaalt
 * hoeveel ruimte een foto in het quilted grid krijgt. Het grid pakt zichzelf
 * dicht (dense), dus gaten vullen zich vanzelf met de eerstvolgende foto die
 * past. Richtlijn: hooguit twee 'groot' per spread als ankerpunten, en zet er
 * geen twee liggende 'middel' direct achter elkaar — dan ontstaat een blok van
 * twee volle rijen zonder ritme.
 *
 * De sectie verdwijnt vanzelf als deze lijst leeg is.
 */
import type { ImageMetadata } from 'astro';

import klarinetPiano from '../assets/fotos/klarinet-piano.jpg';
import christaBank from '../assets/fotos/christa-bank.jpg';
import liedjeLeerling from '../assets/fotos/liedje-leerling.jpg';
import klarinetSneeuw from '../assets/fotos/klarinet-sneeuw.jpg';
import klarinetensemble from '../assets/fotos/klarinetensemble.jpg';
import optreden from '../assets/fotos/optreden.jpg';
import cdStapel from '../assets/fotos/cd-stapel.jpg';
import roosBladmuziek from '../assets/fotos/roos-bladmuziek.jpg';
import klarinetGroen from '../assets/fotos/klarinet-groen.jpg';
import jongeKlarinettisten from '../assets/fotos/jonge-klarinettisten.jpg';
import christaBuiten from '../assets/fotos/christa-buiten.jpg';
import klarinetkring from '../assets/fotos/klarinetkring.jpg';
import klepwerk from '../assets/fotos/klepwerk-zwartwit.jpg';
import blokfluitKlarinet from '../assets/fotos/blokfluit-klarinet.jpg';

export interface GalerijFoto {
  /** Geïmporteerde afbeelding; weglaten zolang de foto er nog niet is. */
  src?: ImageMetadata;
  /** Beschrijving voor screenreaders en het placeholder-slot. */
  alt: string;
  /** Kort bijschrift; zichtbaar als overlay bij hover/focus en in de lightbox. */
  onderschrift?: string;
  /**
   * Formaat in het quilted grid: 'groot' is het anker (2×2), 'middel'
   * volgt de oriëntatie van de foto (staand 1×2, liggend 2×1),
   * 'klein' is 1×1. Het grid pakt zichzelf dicht (dense).
   */
  formaat: 'groot' | 'middel' | 'klein';
}

export const fotos: GalerijFoto[] = [
  {
    src: klarinetPiano,
    formaat: 'groot',
    alt: 'Klarinet in close-up, liggend op de vleugel',
  },
  {
    src: christaBank,
    formaat: 'middel',
    alt: 'Christa ten Berg zit lachend op de bank met haar klarinet op schoot',
  },
  {
    src: liedjeLeerling,
    formaat: 'klein',
    alt: 'Handgeschreven briefje van een leerling, met een zelfbedacht liedje op een eigen notenbalk',
    onderschrift: 'Een eigen liedje van een leerling',
  },
  {
    src: klarinetSneeuw,
    formaat: 'middel',
    alt: 'Klarinet rechtop voor een besneeuwde deur',
  },
  {
    src: blokfluitKlarinet,
    formaat: 'middel',
    alt: 'Een blokfluit en een klarinet liggen naast elkaar op de toetsen van een piano',
    onderschrift: 'Blokfluit, klarinet en piano',
  },
  {
    src: jongeKlarinettisten,
    formaat: 'middel',
    alt: 'Twee jonge klarinettistes spelen samen in een industriële ruimte',
  },
  {
    src: klarinetGroen,
    formaat: 'groot',
    alt: 'Klarinet liggend tussen de groene bladeren van een struik',
    onderschrift: 'Flora en musica',
  },
  {
    src: klarinetensemble,
    formaat: 'middel',
    alt: 'Klarinetensemble tijdens een optreden op een buitenpodium',
    onderschrift: 'Het klarinetensemble op het podium',
  },
  {
    src: optreden,
    formaat: 'klein',
    alt: 'Optreden met klarinet',
  },
  {
    src: christaBuiten,
    formaat: 'middel',
    alt: 'Christa ten Berg buiten in het groen, met haar klarinet in haar handen',
  },
  {
    src: klarinetkring,
    formaat: 'middel',
    alt: 'Jonge klarinettisten in een kring, hun instrumenten naar het midden gericht, van bovenaf gezien',
    onderschrift: 'Samenspel in de klas',
  },
  {
    src: cdStapel,
    formaat: 'middel',
    alt: 'Stapel cd\u2019s met een koptelefoon erbovenop',
  },
  {
    src: klepwerk,
    formaat: 'klein',
    alt: 'Close-up van het klepwerk van een klarinet, in zwart-wit',
  },
  {
    src: roosBladmuziek,
    formaat: 'klein',
    alt: 'Witte roos op bladmuziek naast een klarinet, in zwart-wit',
  },
];
