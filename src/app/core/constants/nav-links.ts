export interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', path: '/', exact: true },
  { label: 'À Propos', path: '/about' },
  { label: 'Nos Réalisations', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];
