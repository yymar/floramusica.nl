import { Monogram } from 'flora-musica-ds';

export const Tegel = () => <Monogram maat={150} />;

export const Klein = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
    <Monogram maat={56} />
    <Monogram maat={32} />
  </div>
);
