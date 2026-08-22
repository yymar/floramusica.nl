import { Figuur } from 'flora-musica-ds';

export const SlotOpPapier = () => (
  <div style={{ padding: 24, width: 260 }}>
    <Figuur alt="Foto uit de lespraktijk" breedte={3} hoogte={4} notitie="Foto uit de lespraktijk volgt" />
  </div>
);

export const SlotOpBordeaux = () => (
  <div style={{ padding: 24, width: 260, background: 'var(--fm-bordeaux-deep)' }}>
    <Figuur alt="Portretfoto" breedte={4} hoogte={5} toon="bordeaux" notitie="Portretfoto volgt" />
  </div>
);
