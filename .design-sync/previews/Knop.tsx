import { Knop } from 'flora-musica-ds';

export const OpPapier = () => (
  <div style={{ padding: 24 }}>
    <Knop href="#contact">Neem contact op</Knop>
  </div>
);

export const OpBordeaux = () => (
  <div style={{ padding: 24, background: 'var(--fm-bordeaux-deep)' }}>
    <Knop variant="paper" href="#contact">Neem contact op</Knop>
  </div>
);

export const AlsButton = () => (
  <div style={{ padding: 24 }}>
    <Knop onClick={() => {}}>Verstuur bericht</Knop>
  </div>
);
