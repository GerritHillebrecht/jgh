import { Route } from '@angular/router';
import { AuthGuard, hasCustomClaim } from '@angular/fire/auth-guard';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   redirectTo: 'menu/food',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadComponent: () => import('./feature/landing/landing.component'),
    title: 'Das Stadtbistro',
    data: {
      theme: 'light',
    },
  },
  {
    path: 'cart',
    loadComponent: () => import('./feature/cart/cart.component'),
  },
  {
    path: 'team',
    loadComponent: () => import('./feature/team/team.component'),
    title: 'Das Stadtbistro - Unser Team',
    data: {
      theme: 'dark',
    },
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./feature/dashboard/template/dashboard-template.component'),
    canActivate: [AuthGuard],
    data: {
      authGuardPipe: () => hasCustomClaim('admin'),
    },
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
    title: 'Das Stadtbistro - Speisekarte',
    data: {
      theme: 'dark',
    },
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
  {
    path: 'impressum',
    loadComponent: () => import('./feature/impressum/impressum.component'),
  },
];
