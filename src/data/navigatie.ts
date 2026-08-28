/** Ankernavigatie van de one-pager. Volgorde = volgorde in de header. */
import { taalVan } from './copy';

export interface NavItem {
  label: string;
  anker: string;
}

const labels = {
  nl: ['Over', 'Beelden', 'Lessen', 'Locatie', 'Praktisch', 'Contact'],
  en: ['About', 'Pictures', 'Lessons', 'Location', 'Practical', 'Contact'],
};
const ankers = ['#over', '#beelden', '#lessen', '#locatie', '#praktisch', '#contact'];

export const navigatie = (locale?: string): NavItem[] =>
  labels[taalVan(locale)].map((label, i) => ({ label, anker: ankers[i] }));
