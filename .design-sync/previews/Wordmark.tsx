import { Wordmark } from 'flora-musica-ds';

export const OpPapier = () => (
  <div style={{ fontSize: 44, padding: 24 }}><Wordmark /></div>
);

export const OpBordeaux = () => (
  <div style={{ fontSize: 44, padding: 24, background: 'var(--fm-bordeaux-deep)' }}>
    <Wordmark toon="paper" />
  </div>
);

export const HeaderFormaat = () => (
  <div style={{ fontSize: 19, padding: '12px 24px', background: 'var(--fm-bordeaux-deep)' }}>
    <Wordmark toon="paper" />
  </div>
);
