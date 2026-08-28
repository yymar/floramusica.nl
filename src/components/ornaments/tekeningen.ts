/**
 * Inlader voor Imkes handgetekende ornamenten (`src/assets/imke/`, zie
 * MANIFEST.md en scripts/imke-assets.mjs). Vaste bordeaux-kleur, dus PNG's
 * via de asset-pipeline en niet het oude inline-SVG/currentColor-systeem.
 *
 * De naam-union staat hier met de hand, om dezelfde reden als vroeger bij
 * de SVG-set: TypeScript ziet de sleutels van een glob niet. Tekening
 * toevoegen = naam in scripts/imke-assets.mjs, script draaien, naam in de
 * union. Vergeet je de union, dan faalt de build hard in `tekening()`.
 */
import type { ImageMetadata } from 'astro';

export type TekeningNaam =
  | 'blad-1'
  | 'blad-2'
  | 'bloem-1'
  | 'bloem-2'
  | 'noot-1'
  | 'noot-1a'
  | 'noot-2a'
  | 'noot-3'
  | 'noot-3a'
  | 'noot-4a'
  | 'noot-5'
  | 'noot-5a'
  | 'noot-6a'
  | 'noot-7'
  | 'noot-7a'
  | 'noot-8a'
  | 'noot-9a';

const beelden = import.meta.glob<{ default: ImageMetadata }>('../../assets/imke/*.png', {
  eager: true,
});

export function tekening(naam: TekeningNaam): ImageMetadata {
  const sleutel = Object.keys(beelden).find((k) => k.endsWith(`/${naam}.png`));
  if (!sleutel) throw new Error(`Tekening ontbreekt: ${naam}`);
  return beelden[sleutel].default;
}
