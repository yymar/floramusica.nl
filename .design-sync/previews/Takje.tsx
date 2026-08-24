import { Takje } from 'flora-musica-ds';

/* De twee takjes naast elkaar op leesbare maat: dit is de variant-as. */
export const Varianten = () => (
  <div
    className="fm-basis"
    style={{
      background: 'var(--fm-paper)',
      padding: 32,
      display: 'flex',
      gap: 48,
      alignItems: 'flex-end',
      color: 'var(--fm-bordeaux)',
    }}
  >
    <Takje naam="sol-sleutel" breedte={44} />
    <Takje naam="noten-blad" breedte={92} />
  </div>
);

/* Zoals de site hem gebruikt: klein, rechts uitgelijnd, als opmaat naar de
   bordeaux regel van een sectie. Nooit naast lopende tekst. */
export const AlsSectieOpmaat = () => (
  <div className="fm-basis" style={{ background: 'var(--fm-paper-deep)', padding: 32 }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--fm-bordeaux)', opacity: 0.7 }}>
      <Takje naam="sol-sleutel" breedte={24} />
    </div>
    <div style={{ borderTop: '2px solid var(--fm-bordeaux)', marginTop: 12, paddingTop: 20 }}>
      <h3
        style={{
          font: '600 var(--fm-text-subkop)/1.3 var(--fm-font-display)',
          color: 'var(--fm-bordeaux)',
          margin: 0,
        }}
      >
        Klarinet
      </h3>
      <p style={{ margin: '8px 0 0', maxWidth: '52ch', color: 'var(--fm-ink)' }}>
        Haar eigen instrument, en het hart van de praktijk. Van de eerste toon tot
        samenspel in een orkest of ensemble.
      </p>
    </div>
  </div>
);

/* En als afsluiter onderaan een sectie. */
export const AlsSectieAfsluiter = () => (
  <div className="fm-basis" style={{ background: 'var(--fm-paper-deep)', padding: 32 }}>
    <p style={{ margin: '0 0 16px', color: 'var(--fm-ink-soft)', fontSize: 'var(--fm-text-klein)' }}>
      Kinderen · Jongeren · Volwassenen
    </p>
    <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--fm-bordeaux)', opacity: 0.6 }}>
      <Takje naam="noten-blad" breedte={80} />
    </div>
  </div>
);
