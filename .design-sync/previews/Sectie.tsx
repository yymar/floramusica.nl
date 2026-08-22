import { Sectie } from 'flora-musica-ds';

export const MargeGrid = () => (
  <div className="fm-basis">
    <Sectie id="lessen" label="Lessen" kop="Lessen">
      <p style={{ margin: 0, maxWidth: '62ch' }}>
        Iedere les is individueel, afgestemd op je eigen doelen en tempo.
        Dit zijn de instrumenten waarin je les kunt krijgen.
      </p>
    </Sectie>
  </div>
);

export const MetTint = () => (
  <div className="fm-basis">
    <Sectie id="praktisch" label="Praktisch" kop="Praktisch" tint>
      <p style={{ margin: 0, maxWidth: '62ch' }}>
        De tarieven en lestijden staan hier zodra ze zijn vastgesteld.
      </p>
    </Sectie>
  </div>
);
