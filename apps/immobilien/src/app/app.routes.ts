import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component'),
    title: 'Chatera Gross - Home staging',
  },
  {
    path: 'reference',
    loadComponent: () => import('./pages/reference/reference.component'),
    title: 'Chatera Gross - Referenzen'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component'),
    title: 'Chatera Gross - Kontakt'
  }
];
