import { Lint } from 'flora-musica-ds';

export const Voorgrond = () => (
  <div style={{ background: 'var(--fm-paper)', padding: 24, color: 'var(--fm-bordeaux)' }}>
    <Lint />
  </div>
);

export const AlsDraad = () => (
  <div style={{ background: 'var(--fm-paper-deep)', padding: 24, color: 'var(--fm-bordeaux)', opacity: 0.12 }}>
    <Lint variant="quiet" />
  </div>
);

/* De centerline is de enige variant die zichzelf laat tekenen; hier staat hij
   stil, zoals hij er ook uitziet bij prefers-reduced-motion. */
export const Centerline = () => (
  <div style={{ background: 'var(--fm-paper)', padding: 24, color: 'var(--fm-bordeaux)', opacity: 0.5 }}>
    <Lint variant="centerline" />
  </div>
);
