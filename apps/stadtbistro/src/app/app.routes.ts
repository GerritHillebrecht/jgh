import { Route } from '@angular/router';
import { AuthGuard, hasCustomClaim } from '@angular/fire/auth-guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./feature/landing/landing.component'),
    title: 'Das Stadtbistro',
    data: {
      theme: 'light',
    },
  },
  {
    path: 'speisekarte',
    loadComponent: () => import('./feature/speisekarte/speisekarte.component'),
    title: 'Das Stadtbistro - Speisekarte (Deutsch)',
    data: {
      theme: 'dark',
    },
  },
  {
    path: 'menu',
    loadComponent: () => import('./feature/menu/menu.component'),
    title: 'Das Stadtbistro - Speisekarte',
    data: {
      theme: 'dark',
    },
  },
  {
    path: 'menu/food',
    redirectTo: '/menu',
    pathMatch: 'full',
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
    path: 'impressum',
    title: 'Das Stadtbistro - Impressum',
    loadComponent: () => import('./feature/impressum/impressum.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
