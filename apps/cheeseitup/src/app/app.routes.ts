import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component'),
    title: 'Cheese it up - Best Pizza in Town',
  },
  {
    path: 'menu',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/menu/menu.component'),
      },
      {
        path: ':item',
        loadComponent: () => import('./pages/menu/menu-item/menu-item.component'),
      },
    ],
  },
];
