import { Motief } from 'flora-musica-ds';

export const OpDeOmslag = () => (
  <div style={{ background: 'var(--fm-bordeaux-deep)', padding: 24, display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ color: 'var(--fm-paper)', opacity: 0.14 }}>
      <Motief breedte={260} />
    </div>
  </div>
);

export const Watermerk = () => (
  <div style={{ background: 'var(--fm-paper)', padding: 24 }}>
    <div style={{ color: 'var(--fm-bordeaux)', opacity: 0.12 }}>
      <Motief variant="quiet" breedte={200} />
    </div>
  </div>
);
