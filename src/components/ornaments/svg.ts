/**
 * Gedeelde inlader voor de decoratieve SVG's uit `src/assets`. Zie
 * `src/assets/README.md` en `src/assets/MANIFEST.md` voor de set zelf.
 *
 * De bestanden gaan inline de HTML in en niet via <img>: alleen dan volgen
 * ze `currentColor` en de CSS-cascade, en kost een ornament geen extra
 * request. Vite's glob leest ze bij de build in; de naam-unions hieronder
 * worden uit de bestandsnamen afgeleid, dus een nieuw ornament toevoegen is:
 * bestand in de map, regel in MANIFEST.md. Niets in deze module registreren.
 *
 * `layers/` blijft hier bewust buiten: dat zijn Procreate-bronbestanden,
 * gitignored, en ze horen nooit in de build terecht te komen.
 */

// De opties moeten hier letterlijk staan: Vite leest de glob statisch en ziet
// een gedeelde constante niet, waarna je modules terugkrijgt in plaats van de
// bestandsinhoud.
const motieven = import.meta.glob('../../assets/motifs/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});
const linten = import.meta.glob('../../assets/ribbons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});
const takjes = import.meta.glob('../../assets/sprigs/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/**
 * De namen, per familie. Ze staan hier met de hand omdat TypeScript de
 * sleutels van een glob niet kan zien: Vite vult die pas bij de transform,
 * dus `keyof typeof motieven` is gewoon `string` en elk afgeleid type valt
 * terug op `never`. Automatisch afleiden zou een codegen-stap kosten, en
 * daar is deze set te klein voor.
 *
 * Een ornament toevoegen is dus: bestand in de map, regel in MANIFEST.md,
 * naam erbij in de union hieronder. Vergeet je die laatste, dan faalt de
 * build alsnog hard — `zoek()` gooit als het bestand niet gevonden wordt.
 */
export type MotiefNaam = 'klarinet-bloei';
export type LintNaam = 'a' | 'b' | 'c';
export type TakjeNaam = 'bloem-knop' | 'bloem-open' | 'tak-blad' | 'noten-blad' | 'sol-sleutel';

/** `full` is het volle detail; `quiet` en `centerline` zijn losse bestanden. */
export type Variant = 'full' | 'quiet' | 'centerline';

function escape(waarde: string) {
  return waarde.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function zoek(map: Record<string, unknown>, bestand: string) {
  const sleutel = Object.keys(map).find((k) => k.endsWith(`/${bestand}`));
  // Bij een typefout in `name` faalt de build hier, niet stilletjes in de pagina.
  if (!sleutel) throw new Error(`Ornament ontbreekt: ${bestand}`);
  return map[sleutel] as string;
}

/**
 * Haalt het bestand op en zet er de attributen op die een decoratief
 * ornament nodig heeft. De root-<svg> uit het bestand blijft staan, zodat
 * `viewBox` en de fill/stroke-instelling per variant intact blijven — de
 * centerlines tekenen met stroke, de rest vult.
 *
 * `pathLength="1"` maakt de draw-animatie mogelijk zonder de echte padlengte
 * te kennen: dasharray en dashoffset rekenen dan in eenheden van 1.
 */
function inline(
  map: Record<string, unknown>,
  familie: string,
  naam: string,
  variant: Variant,
  klasse: string,
  meetbaarPad = false,
) {
  const achtervoegsel = variant === 'full' ? '' : `-${variant}`;
  let svg = zoek(map, `floramusica-${familie}-${naam}${achtervoegsel}.svg`);

  svg = svg.replace('<svg', `<svg aria-hidden="true" focusable="false" class="${escape(klasse)}"`);
  if (meetbaarPad) svg = svg.replaceAll('<path', '<path pathLength="1"');
  return svg;
}

export const motiefSvg = (naam: MotiefNaam, variant: Variant, klasse: string) =>
  inline(motieven, 'motif', naam, variant, klasse);

export const lintSvg = (naam: LintNaam, variant: Variant, klasse: string, draw = false) =>
  inline(linten, 'ribbon', naam, variant, klasse, draw);

export const takjeSvg = (naam: TakjeNaam, variant: Variant, klasse: string) =>
  inline(takjes, 'sprig', naam, variant, klasse);
