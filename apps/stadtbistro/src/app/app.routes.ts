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
    path: 'team',
    loadComponent: () => import('./feature/team/team.component'),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./feature/dashboard/template/dashboard-template.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './feature/dashboard/pages/dashboard-landing/dashboard-landing.component'
          ),
      },
    ],
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
