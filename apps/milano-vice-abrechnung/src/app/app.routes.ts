import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component'),
  },
  {
    path: 'recipes',
    loadComponent: () => import('./pages/recipes/recipes.component'),
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component'),
  },
];
