import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shop',
    children: [
      { path: '', loadComponent: () => import('./pages/shop/shop.component') },
      {
        path: ':product',
        loadComponent: () =>
          import('./pages/shop/pages/product/product.component'),
      },
    ],
  },
  {
    path: 'collection/:collection',
    loadComponent: () =>
      import('./pages/collections/pages/collection/collection.component'),
  },
  {
    path: '**',
    redirectTo: '/shop',
    pathMatch: 'full',
  },
];
