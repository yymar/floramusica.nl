/**
 * Imkes Procreate-tekeningen (Dropbox, 4000x5000) bijsnijden op inhoud en
 * verkleinen voor het web. Herhaalbaar: draai dit script opnieuw wanneer er
 * nieuwe tekeningen bij komen, en zet de naam in SELECTIE.
 *
 *   node scripts/imke-assets.mjs
 *
 * Alle web-ornamenten zijn de bordeaux-varianten (ze staan op papier of
 * toon-op-toon op het bordeaux vlak); de crème-klarinet van de omslag is
 * eerder al met de hand geëxporteerd en blijft buiten dit script.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BRON =
  '/Users/ymar/Library/CloudStorage/Dropbox-Personal/personal/Yoran/Other/Other/Flora Musica Website/tekeningen_imke';
const DOEL = new URL('../src/assets/imke/', import.meta.url).pathname;

// webnaam → bronbestand. De 'a'-varianten hebben gevulde nootkoppen, de
// naamloze open (holle) koppen.
const SELECTIE = {
  'blad-1': 'Blad 1 Bordeaux .png',
  'blad-2': 'Blad 2 Bordeaux .png',
  'bloem-1': 'Flower 1 Bordeaux .png',
  'bloem-2': 'Flower 2 Bordeaux .png',
  'noot-1': 'Noot 1 Bordeaux .png',
  'noot-1a': 'Noot 1a Bordeaux .png',
  'noot-2a': 'Noot 2a Bordeaux .png',
  'noot-3': 'Noot 3 Bordeaux .png',
  'noot-3a': 'Noot 3a Bordeaux .png',
  'noot-4a': 'Noot 4a Bordeaux .png',
  'noot-5': 'Noot 5 Bordeaux .png',
  'noot-5a': 'Noot 5a Bordeaux .png',
  'noot-6a': 'Noot 6a Bordeaux .png',
  'noot-7': 'Noot 7 Bordeaux .png',
  'noot-7a': 'Noot 7a Bordeaux .png',
  'noot-8a': 'Noot 8a Bordeaux .png',
  'noot-9a': 'Noot 9a Bordeaux .png',
};

// Grootste weergave is ~180 CSS-px; 400px bron is dan retina-scherp.
const MAX = 400;

await mkdir(DOEL, { recursive: true });
for (const [naam, bron] of Object.entries(SELECTIE)) {
  const uit = path.join(DOEL, `${naam}.png`);
  const beeld = sharp(path.join(BRON, bron)).trim().resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true });
  const info = await beeld.png({ compressionLevel: 9 }).toFile(uit);
  console.log(`${naam}.png  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}kB`);
}
