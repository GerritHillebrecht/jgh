import { Route } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectToLogin = redirectUnauthorizedTo(['auth']);
const redirectToApp = redirectLoggedInTo(['']);

export const appRoutes: Route[] = [
  {
    path: '',
    ...canActivate(() => redirectToLogin),
    loadComponent: () =>
      import('./feature/app/template/template-app.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./feature/app/pages/landing-app/landing-app.component'),
      },
    ],
  },
  {
    path: 'auth',
    ...canActivate(() => redirectToApp),
    loadComponent: () =>
      import('./feature/auth/template/landing-auth.component'),
  },
];
