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
import harmonieUniform from '../assets/fotos/harmonie-uniform.jpg';
import trioLeerlingen from '../assets/fotos/trio-leerlingen.jpg';
import klarinettenOmhoog from '../assets/fotos/klarinetten-omhoog.jpg';
import rodeKlarinet from '../assets/fotos/rode-klarinet.jpg';
import hondPiano from '../assets/fotos/hond-piano.jpg';
import klarinetdag from '../assets/fotos/klarinetdag.jpg';
import klarinetSneeuw from '../assets/fotos/klarinet-sneeuw.jpg';
import volwassenenensemble from '../assets/fotos/volwassenenensemble.jpg';
import pianoles from '../assets/fotos/pianoles.jpg';
import krantenknipsel from '../assets/fotos/krantenknipsel.jpg';
import kerstmutsen from '../assets/fotos/kerstmutsen.jpg';
import basklarinet from '../assets/fotos/basklarinet.jpg';
import klarinetkring from '../assets/fotos/klarinetkring.jpg';
import trioOptreden from '../assets/fotos/trio-optreden.jpg';
import klepwerk from '../assets/fotos/klepwerk-zwartwit.jpg';
import leerlingenPodium from '../assets/fotos/leerlingen-podium.jpg';
import optreden from '../assets/fotos/optreden.jpg';
import roosBladmuziek from '../assets/fotos/roos-bladmuziek.jpg';

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
    src: harmonieUniform,
    focus: '50% 30%', // gezichten in de bovenste helft
    formaat: 'klein',
    alt: 'Oude foto van twee meisjes in het blauwe uniform van een harmonieorkest',
    altEn: 'Old photo of two girls in the blue uniform of a wind band',
  },
  {
    src: trioLeerlingen,
    formaat: 'klein',
    alt: 'Drie klarinettistes spelen samen achter muziekstandaards op een kleed',
    altEn: 'Three clarinettists playing together behind music stands on a rug',
  },
  {
    src: klarinettenOmhoog,
    focus: '50% 10%', // de klarinetten in de lucht
    formaat: 'middel',
    alt: 'Een groep jonge leerlingen steekt vrolijk hun klarinetten in de lucht',
    altEn: 'A group of young students cheerfully holding their clarinets up in the air',
  },
  {
    src: rodeKlarinet,
    formaat: 'middel',
    alt: 'Een rode klarinet in onderdelen in de koffer',
    altEn: 'A red clarinet in parts, lying in its case',
  },
  {
    src: hondPiano,
    formaat: 'klein',
    alt: 'Een hond kijkt mee naar de bladmuziek op de piano',
    altEn: 'A dog looking at the sheet music on the piano',
  },
  {
    src: klarinetdag,
    formaat: 'groot',
    alt: 'Een zaal vol klarinettisten repeteert samen in paars podiumlicht',
    altEn: 'A hall full of clarinettists rehearsing together in purple stage light',
    onderschrift: 'Klarinetdag',
    onderschriftEn: 'Clarinet day',
  },
  {
    src: klarinetSneeuw,
    formaat: 'middel',
    alt: 'Klarinet rechtop voor een besneeuwde deur',
    altEn: 'Clarinet standing upright in front of a snow-covered door',
  },
  {
    src: volwassenenensemble,
    formaat: 'middel',
    alt: 'Volwassen klarinettisten spelen samen terwijl de coach meeluistert',
    altEn: 'Adult clarinettists playing together while the coach listens',
  },
  {
    src: pianoles,
    focus: '50% 30%', // hoed én toetsen in beeld
    formaat: 'klein',
    alt: 'Een verklede leerling met een tovenaarshoed speelt piano',
    altEn: 'A student in a wizard hat playing the piano',
  },
  {
    src: krantenknipsel,
    formaat: 'klein',
    alt: 'Krantenknipsel over een koffieconcert met muziek op een boerderij in Elden',
    altEn: 'Newspaper cutting about a coffee concert with music at a farm in Elden',
  },
  {
    src: kerstmutsen,
    formaat: 'middel',
    alt: 'Vijf jonge klarinettisten met kerstmutsen spelen samen',
    altEn: 'Five young clarinettists in Christmas hats playing together',
  },
  {
    src: basklarinet,
    formaat: 'klein',
    alt: 'De zilveren beker van een basklarinet op een houten vloer',
    altEn: 'The silver bell of a bass clarinet on a wooden floor',
  },
  {
    src: trioOptreden,
    formaat: 'klein',
    alt: 'Optreden van een trio met klarinet, gitaar en accordeon',
    altEn: 'A trio with clarinet, guitar and accordion performing',
  },
  {
    src: klepwerk,
    formaat: 'klein',
    alt: 'Close-up van het klepwerk van een klarinet, in zwart-wit',
    altEn: 'Close-up of the keywork of a clarinet, in black and white',
  },
  {
    src: leerlingenPodium,
    focus: '50% 10%', // hoofden hoog in beeld
    formaat: 'middel',
    alt: 'Christa speelt op het podium samen met vier jonge leerlingen',
    altEn: 'Christa on stage playing together with four young students',
  },
  {
    src: optreden,
    formaat: 'middel',
    alt: 'Optreden met klarinet',
    altEn: 'Performance with clarinet',
  },
  {
    src: roosBladmuziek,
    formaat: 'middel',
    alt: 'Witte roos op bladmuziek naast een klarinet, in zwart-wit',
    altEn: 'White rose on sheet music next to a clarinet, in black and white',
  },
  {
    src: klarinetkring,
    formaat: 'middel',
    alt: 'Jonge klarinettisten in een kring, hun instrumenten naar het midden gericht, van bovenaf gezien',
    altEn: 'Young clarinettists in a circle, instruments pointing to the middle, seen from above',
    onderschrift: 'Samenspel in de klas',
    onderschriftEn: 'Playing together in class',
  },
];
