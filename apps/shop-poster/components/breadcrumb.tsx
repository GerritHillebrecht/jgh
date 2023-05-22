'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const paths = usePathname();

  function generateBreadcrumbs() {
    const path = paths.split('/');
    const breadcrumbs = path.map((p, index) => {
      if (index === 0) {
        return {
          name: 'Home',
          path: '/',
        };
      }

      return {
        name: p,
        path: p,
      };
    });

    return breadcrumbs;
  }

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="text-sm breadcrumbs">
        <ul>
          {generateBreadcrumbs().map((breadcrumb, index) => {
            if (index === generateBreadcrumbs().length - 1) {
              return (
                <li className="capitalize" key={breadcrumb.path}>
                  {breadcrumb.name}
                </li>
              );
            }

            return (
              <li key={breadcrumb.path} className="capitalize">
                <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
