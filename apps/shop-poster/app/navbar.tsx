import Link from 'next/link';

interface Route {
  path: string;
  label: string;
}

export default function Navbar() {
  const routes: Route[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="h-14 sm:h-16 px-4 flex justify-center shadow-2xl border-[1px] border-solid border-stone-100 sticky top-0 bg-white z-50">
      <nav className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href="/login"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
