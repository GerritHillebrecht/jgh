'use client';

import Container from '../container/container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './userMenus/UserMenu';
import { SafeUser } from '../../types';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log('currentUser', currentUser);
  return (
    <header className="fixed w-full bg-white z-10 shadow-sm border-b-[1px] border-solid">
      <nav className="py-4">
        <Container>
          <div className="flex flex-row gap-3 md:gap-0 justify-between items-center">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
