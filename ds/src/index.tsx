import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { forteF, mezzoM, solsleutel } from './glyphs';

export { forteF, mezzoM, solsleutel };

/**
 * De wordmark van Flora Musica: de forte-f en mezzo-m uit de bladmuziek
 * (Bravura, SIL OFL) gecombineerd met Bricolage. Maten in em, dus de
 * wordmark schaalt mee met de font-size van zijn omgeving.
 */
export function Wordmark({ toon = 'bordeaux' }: {
  /** 'bordeaux' op licht papier, 'paper' op het bordeaux vlak. */
  toon?: 'bordeaux' | 'paper';
}) {
  return (
    <span className={`fm-wordmark${toon === 'paper' ? ' fm-wordmark--paper' : ''}`}>
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        Flora Musica, muziekpraktijk
      </span>
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'baseline' }}>
        <svg viewBox={forteF.viewBox} style={{ height: '1.35em', width: '1.15em', marginRight: '-0.33em' }}>
          <g transform="scale(1,-1)"><path d={forteF.pad} fill="currentColor" /></g>
        </svg>
        <span>lora</span>
        <span style={{ width: '0.33em' }} />
        <svg viewBox={mezzoM.viewBox} style={{ height: '0.69em', width: '1.12em', marginRight: '0.04em' }}>
          <g transform="scale(1,-1)"><path d={mezzoM.pad} fill="currentColor" /></g>
        </svg>
        <span>usica</span>
      </span>
    </span>
  );
}

/** Het fm-monogram op een bordeaux tegel (app-icoon, favicon, avatar). */
export function Monogram({ maat = 150 }: {
  /** Zijde van de tegel in px. */
  maat?: number;
}) {
  const f = maat * 0.44;
  return (
    <span className="fm-monogram" style={{ width: maat, height: maat }} role="img" aria-label="Flora Musica">
      <span style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
        <svg viewBox={forteF.viewBox} style={{ width: f, height: f * 1.18 }}>
          <g transform="scale(1,-1)"><path d={forteF.pad} fill="currentColor" /></g>
        </svg>
        <svg viewBox={mezzoM.viewBox} style={{ width: f * 0.93, height: f * 0.56, marginLeft: -f * 0.36 }}>
          <g transform="scale(1,-1)"><path d={mezzoM.pad} fill="currentColor" /></g>
        </svg>
      </span>
    </span>
  );
}

/**
 * De openingsregel van de partituur: notenbalk van rand tot rand met een
 * solsleutel aan het begin. Toon-op-toon op het bordeaux hero-vlak
 * (zet hem in een container met achtergrond --fm-bordeaux-deep).
 */
export function PartituurRegel({ hoogte = '10rem' }: {
  /** CSS-hoogte van de regel, bijvoorbeeld '10rem' of 'clamp(8rem,19vw,13rem)'. */
  hoogte?: string;
}) {
  return (
    <svg
      viewBox="120 -1098 30000 1756"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
      className="fm-partituurregel"
      style={{ height: hoogte }}
    >
      <g transform="scale(1,-1)">
        {[0, 250, 500, 750, 1000].map((y) => (
          <line key={y} x1="0" y1={y} x2="40000" y2={y} stroke="currentColor" strokeWidth="14" opacity="0.75" />
        ))}
        <path d={solsleutel.pad} transform="translate(200 0)" fill="currentColor" />
      </g>
    </svg>
  );
}

/**
 * De slotregel: notenbalk met eindstreep (dun + dik), muzikaal correct
 * einde van de pagina. Hoort boven de footer, full-bleed.
 */
export function NotenbalkSlot() {
  return (
    <svg width="100%" height="41" shapeRendering="crispEdges" aria-hidden="true" className="fm-notenbalkslot">
      {[0, 10, 20, 30, 40].map((y) => (
        <rect key={y} x="0" y={y} width="100%" height="1" fill="currentColor" opacity="0.4" />
      ))}
      <rect x="100%" transform="translate(-8 0)" y="0" width="1" height="41" fill="currentColor" opacity="0.7" />
      <rect x="100%" transform="translate(-4 0)" y="0" width="4" height="41" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** De knop. Eén intentie per pagina; label in gebiedende wijs ("Neem contact op"). */
export function Knop({ variant = 'bordeaux', href, onClick, children }: {
  /** 'bordeaux' op papier; 'paper' op het bordeaux vlak. */
  variant?: 'bordeaux' | 'paper';
  /** Met href rendert de knop als link. */
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const klasse = `fm-knop${variant === 'paper' ? ' fm-knop--paper' : ''}`;
  return href
    ? <a className={klasse} href={href}>{children}</a>
    : <button type="button" className={klasse} onClick={onClick}>{children}</button>;
}

/**
 * Het marge-grid van het programmaboekje: sectielabel in de linkermarge op
 * de baseline van de kop (vanaf 768px), inhoud in de brede rechterkolom.
 * Vervangt eyebrows volledig; gebruik nooit een label boven de kop.
 */
export function Sectie({ id, label, kop, tint = false, children }: {
  id?: string;
  /** Kort marge-label, bijv. "Lessen". */
  label: string;
  /** De sectiekop, bijv. "Waar je haar vindt". */
  kop: string;
  /** Iets dieper papier als achtergrond, voor rustige afwisseling. */
  tint?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`fm-sectie${tint ? ' fm-sectie--tint' : ''}`}>
      <div className="fm-sectie__binnen">
        <p className="fm-sectie__label" aria-hidden="true">{label}</p>
        <div>
          <h2 className="fm-sectie__kop">{kop}</h2>
          <div className="fm-sectie__inhoud">{children}</div>
        </div>
      </div>
    </section>
  );
}

/**
 * Fotoslot. Zonder src een rustige tonale placeholder met de juiste
 * verhoudingen; regel is "weglaten of eerlijk benoemen", nooit "TODO" tonen.
 */
export function Figuur({ src, alt, breedte, hoogte, toon = 'paper', notitie = 'Foto volgt', stijl }: {
  src?: string;
  alt: string;
  breedte: number;
  hoogte: number;
  /** 'bordeaux' maakt de placeholder een tonale outline op het bordeaux vlak. */
  toon?: 'paper' | 'bordeaux';
  /** Tekst in het lege slot, bijv. "Portretfoto volgt". */
  notitie?: string;
  stijl?: CSSProperties;
}) {
  return (
    <div className={`fm-figuur${toon === 'bordeaux' ? ' fm-figuur--bordeaux' : ''}`} style={stijl}>
      {src ? (
        <img src={src} alt={alt} width={breedte} height={hoogte} loading="lazy" />
      ) : (
        <div className="fm-figuur__leeg" style={{ aspectRatio: `${breedte} / ${hoogte}` }} role="img" aria-label={alt}>
          <p style={{ margin: 0, maxWidth: '24ch' }}>{notitie}</p>
        </div>
      )}
    </div>
  );
}

/**
 * Formulierveld: label boven, Nederlandse foutmelding eronder in bordeaux.
 * Fouten verschijnen pas na blur of submit, nooit tijdens het typen.
 */
export function Veld({ label, fout, id, ...rest }: {
  label: string;
  /** Nederlandse foutmelding, bijv. "Vul je naam in." */
  fout?: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <span className="fm-veld">
      <label className="fm-veld__label" htmlFor={id}>{label}</label>
      <input
        className="fm-veld__invoer"
        id={id}
        aria-invalid={fout ? true : undefined}
        aria-describedby={fout ? `${id}-fout` : undefined}
        {...rest}
      />
      {fout && <p className="fm-veld__fout" id={`${id}-fout`}>{fout}</p>}
    </span>
  );
}
