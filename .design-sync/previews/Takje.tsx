import { Takje } from 'flora-musica-ds';

export const InDeMarge = () => (
  <div style={{ background: 'var(--fm-paper-deep)', padding: 24, display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ color: 'var(--fm-bordeaux)', opacity: 0.7 }}>
      <Takje naam="sol-sleutel" breedte={24} />
    </div>
  </div>
);

export const SectieAfsluiter = () => (
  <div style={{ background: 'var(--fm-paper-deep)', padding: 24, display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ color: 'var(--fm-bordeaux)', opacity: 0.6 }}>
      <Takje naam="noten-blad" breedte={80} />
    </div>
  </div>
);
