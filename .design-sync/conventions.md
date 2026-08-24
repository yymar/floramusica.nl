# Bouwen met Flora Musica

Nederlandse one-pager-stijl van Muziekpraktijk Flora Musica: warm papier, bordeaux als enige accent, muzieknotatie als merk. Alle copy in het Nederlands, je-vorm, zonder uitroeptekens of superlatieven.

## Opzet

Geen provider nodig. Zet paginacontent in een element met klasse `fm-basis` — dat zet de papieren achtergrond (`--fm-paper`), inktkleur, Atkinson Hyperlegible en 17px/1.65. Tokens staan globaal op `:root` zodra `styles.css` geladen is. Fonts komen van Google Fonts via de stylesheet; niets extra laden.

## Stijl-idioom: tokens, geen eigen kleuren

Eigen layout-lijm stijl je met CSS-variabelen — verzin nooit hexwaarden:

| Token | Waarde | Rol |
|---|---|---|
| `--fm-paper` | #faf6f3 | achtergrond |
| `--fm-paper-deep` | #f1e9e4 | rustige sectiewissel |
| `--fm-ink` | #231a1c | tekst |
| `--fm-ink-soft` | #6b5a5d | bijschriften |
| `--fm-bordeaux` | #7b1e2b | hét accent: links, knoppen, labels |
| `--fm-bordeaux-deep` | #4a1219 | hero-/omslagvlak, hover |
| `--fm-paper-dim` | #e8d8d5 | secundaire tekst op bordeaux |
| `--fm-rule` | #dccfc9 | hairlines |
| `--fm-border-strong` | #9a8180 | veldranden |

Typografie: `--fm-font-display` (Bricolage Grotesque, koppen, 600–700), `--fm-font-body` (Atkinson). Maten: `--fm-text-omslag`, `--fm-text-kop`, `--fm-text-subkop`, `--fm-text-basis`, `--fm-text-klein`. Sectie-verticaal: `--fm-sectie`.

Regels: bordeaux is de enige accentkleur (hover = `--fm-bordeaux-deep`, nooit paars/roze); nooit zuiver wit of zwart; geen dark mode; radius klein (2px, zoals `fm-knop`); lopende tekst max 62ch.

## Componentgebruik

- `Sectie` is de sectiestructuur: label in de linkermarge, kop in Bricolage. Gebruik NOOIT een eyebrow/label boven een kop — dat doet Sectie al, in de marge.
- `PartituurRegel` alleen op een vlak met `--fm-bordeaux-deep`, als opening van de pagina; `NotenbalkSlot` alleen als afsluiting boven de footer. Eén keer elk, nooit tussenin strooien.
- `Wordmark` schaalt met de font-size van zijn container (zet bv. `font-size: 3rem` op een wrapper); `toon="paper"` op bordeaux.
- `Knop`: één intentie per pagina, label in gebiedende wijs ("Neem contact op"); `variant="paper"` op bordeaux.
- `Veld`: foutmeldingen in het Nederlands, pas tonen na blur of submit.
- `Figuur` zonder `src` is een net placeholder-slot; toon nooit "TODO" aan bezoekers.
- `Motief`, `Lint` en `Takje` zijn de decoratieve set. Terughoudend: één `Motief` per pagina, hoogstens één of twee `Takje`s per sectie, en nooit tekst over een ornament zonder rustig vlak eronder. Ze zijn altijd `aria-hidden`.
- Variant kiezen: geen achtervoegsel = voorgrond op vol detail; `quiet` uitsluitend als achtergrondwatermerk op 8–15% dekking (hoger en het wint van de tekst); `centerline` alleen voor de draw-animatie. Kleurparen: bordeaux op papier, papier op het bordeaux vlak.
- Geef een ornament altijd een breedte mee; de viewBox levert de hoogte, zodat de layout niet verspringt.

## Waar de waarheid staat

Lees `styles.css` (tokens + alle `fm-*` klassen) en per component de `.d.ts` en `.prompt.md` voordat je stijlt.

## Voorbeeld

```jsx
<div className="fm-basis">
  <div style={{ background: 'var(--fm-bordeaux-deep)', position: 'relative' }}>
    <PartituurRegel hoogte="9rem" />
    <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '3rem 1.25rem' }}>
      <div style={{ fontSize: 'var(--fm-text-omslag)' }}><Wordmark toon="paper" /></div>
      <p style={{ color: 'var(--fm-paper-dim)', maxWidth: '46ch' }}>
        Muziekles in Oss en omgeving, voor kinderen, jongeren en volwassenen.
      </p>
      <Knop variant="paper" href="#contact">Neem contact op</Knop>
    </div>
  </div>
  <Sectie id="lessen" label="Lessen" kop="Lessen">
    <p style={{ maxWidth: '62ch' }}>Iedere les is individueel, afgestemd op je eigen tempo.</p>
  </Sectie>
  <NotenbalkSlot />
</div>
```
