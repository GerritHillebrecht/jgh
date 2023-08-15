import { Route } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/construction/construction.component'),
  },
  {
    path: 'preview',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component'),
        title: 'Khatera Gross - Home staging',
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/reference/reference.component'),
        title: 'Khatera Gross - Referenzen',
      },
      {
        path: 'projects/:slug',
        loadComponent: () =>
          import('./pages/reference/page/reference/reference.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component'),
        title: 'Khatera Gross - Kontakt',
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component'),
        title: 'Khatera Gross - Blog',
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./pages/blog/page/blogPost/blog-post.component'),
        title: 'Khatera Gross - Blog',
      },
      {
        path: 'me',
        loadComponent: () => import('./pages/about/about.component'),
      },
    ],
  },

  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component'),
    title: 'Khatera Gross - Admin',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: 'blog',
        loadComponent: () => import('./pages/admin/pages/blog/blog.component'),
      },
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component'),
    title: 'Khatera Gross - Login',
  },
  {
    path: '**',
    redirectTo: '/preview',
    pathMatch: 'full',
  },
];
