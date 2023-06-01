import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./feature/landing/landing.component'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./feature/cart/cart.component'),
  },
  {
    path: 'menu',
    children: [
      {
        path: '',
        redirectTo: 'food',
        pathMatch: 'full',
      },
      {
        path: 'food',
        loadComponent: () => import('./feature/menu/menu.component'),
      },
    ],
  },
];
