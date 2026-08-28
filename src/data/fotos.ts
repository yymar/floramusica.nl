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
  /** Engelse variant van `alt`, voor de /en/-route. */
  altEn: string;
  /** Kort bijschrift; zichtbaar als overlay bij hover/focus en in de lightbox. */
  onderschrift?: string;
  onderschriftEn?: string;
  /**
   * Brandpunt van de uitsnede, als `object-position`. De cellen in het grid
   * hebben een vaste vorm, dus elke foto wordt bijgesneden; hiermee bepaal je
   * waar. Nodig zodra het onderwerp niet in het midden zit — een hoofd tegen
   * de bovenrand overleeft een center-crop niet. Standaard het midden.
   */
  focus?: string;
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
    altEn: 'Clarinet in close-up, resting on the grand piano',
  },
  {
    src: christaBank,
    focus: '50% 35%', // zit links-onder in het kader
    formaat: 'middel',
    alt: 'Christa ten Berg zit lachend op de bank met haar klarinet op schoot',
    altEn: 'Christa ten Berg sitting on the sofa, smiling, clarinet on her lap',
  },
  {
    src: liedjeLeerling,
    formaat: 'klein',
    alt: 'Handgeschreven briefje van een leerling, met een zelfbedacht liedje op een eigen notenbalk',
    altEn: 'Handwritten note from a student, with a self-invented song on a homemade staff',
    onderschrift: 'Een eigen liedje van een leerling',
    onderschriftEn: 'A student\u2019s own song',
  },
  {
    src: klarinetSneeuw,
    formaat: 'middel',
    alt: 'Klarinet rechtop voor een besneeuwde deur',
    altEn: 'Clarinet standing upright in front of a snow-covered door',
  },
  {
    src: blokfluitKlarinet,
    formaat: 'middel',
    alt: 'Een blokfluit en een klarinet liggen naast elkaar op de toetsen van een piano',
    altEn: 'A recorder and a clarinet lying side by side on the keys of a piano',
    onderschrift: 'Blokfluit, klarinet en piano',
    onderschriftEn: 'Recorder, clarinet and piano',
  },
  {
    src: jongeKlarinettisten,
    focus: '50% 30%', // twee hoofden hoog in beeld
    formaat: 'middel',
    alt: 'Twee jonge klarinettistes spelen samen in een industriële ruimte',
    altEn: 'Two young clarinettists playing together in an industrial space',
  },
  {
    src: klarinetGroen,
    formaat: 'groot',
    alt: 'Klarinet liggend tussen de groene bladeren van een struik',
    altEn: 'Clarinet lying among the green leaves of a shrub',
    onderschrift: 'Flora en musica',
    onderschriftEn: 'Flora and musica',
  },
  {
    src: klarinetensemble,
    focus: '50% 40%', // gezichten in de bovenste helft
    formaat: 'middel',
    alt: 'Klarinetensemble tijdens een optreden op een buitenpodium',
    altEn: 'Clarinet ensemble performing on an outdoor stage',
    onderschrift: 'Het klarinetensemble op het podium',
    onderschriftEn: 'The clarinet ensemble on stage',
  },
  {
    src: optreden,
    formaat: 'klein',
    alt: 'Optreden met klarinet',
    altEn: 'Performance with clarinet',
  },
  {
    src: christaBuiten,
    focus: '50% 25%', // hoofd tegen de bovenrand
    formaat: 'middel',
    alt: 'Christa ten Berg buiten in het groen, met haar klarinet in haar handen',
    altEn: 'Christa ten Berg outdoors among the greenery, clarinet in her hands',
  },
  {
    src: klarinetkring,
    formaat: 'middel',
    alt: 'Jonge klarinettisten in een kring, hun instrumenten naar het midden gericht, van bovenaf gezien',
    altEn: 'Young clarinettists in a circle, instruments pointing to the middle, seen from above',
    onderschrift: 'Samenspel in de klas',
    onderschriftEn: 'Playing together in class',
  },
  {
    src: cdStapel,
    formaat: 'middel',
    alt: 'Stapel cd\u2019s met een koptelefoon erbovenop',
    altEn: 'Stack of CDs with headphones on top',
  },
  {
    src: klepwerk,
    formaat: 'klein',
    alt: 'Close-up van het klepwerk van een klarinet, in zwart-wit',
    altEn: 'Close-up of the keywork of a clarinet, in black and white',
  },
  {
    src: roosBladmuziek,
    formaat: 'klein',
    alt: 'Witte roos op bladmuziek naast een klarinet, in zwart-wit',
    altEn: 'White rose on sheet music next to a clarinet, in black and white',
  },
];
