import { Motief } from 'flora-musica-ds';

/* Zoals op de omslag: papierkleurig op het bordeaux vlak, laag in dekking,
   aan de rand. Eén motief per pagina — dit is dat ene. */
export const OpDeOmslag = () => (
  <div
    style={{
      background: 'var(--fm-bordeaux-deep)',
      padding: 24,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      minHeight: 240,
    }}
  >
    <div style={{ color: 'var(--fm-paper)', opacity: 0.14 }}>
      <Motief breedte={150} />
    </div>
  </div>
);

/* De quiet-variant: vereenvoudigd silhouet, uitsluitend als watermerk op
   8–15% dekking. Hoger en het gaat met de tekst concurreren. */
export const Watermerk = () => (
  <div
    style={{
      background: 'var(--fm-paper)',
      padding: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 240,
    }}
  >
    <div style={{ color: 'var(--fm-bordeaux)', opacity: 0.12 }}>
      <Motief variant="quiet" breedte={130} />
    </div>
  </div>
);
