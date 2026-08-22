import { Veld } from 'flora-musica-ds';

export const Normaal = () => (
  <div className="fm-basis" style={{ padding: 24, width: 360 }}>
    <Veld id="naam" label="Naam" autoComplete="name" />
  </div>
);

export const MetFout = () => (
  <div className="fm-basis" style={{ padding: 24, width: 360 }}>
    <Veld id="email" label="E-mailadres" type="email"
      fout="Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl." />
  </div>
);

export const NietVerplicht = () => (
  <div className="fm-basis" style={{ padding: 24, width: 360 }}>
    <Veld id="telefoon" label="Telefoonnummer (niet verplicht)" type="tel" />
  </div>
);
