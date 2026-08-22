/** Ankernavigatie van de one-pager. Volgorde = volgorde in de header. */

export interface NavItem {
  label: string;
  anker: string;
}

export const navigatie: NavItem[] = [
  { label: 'Over', anker: '#over' },
  { label: 'Lessen', anker: '#lessen' },
  { label: 'Locatie', anker: '#locatie' },
  { label: 'Praktisch', anker: '#praktisch' },
  { label: 'Contact', anker: '#contact' },
];
