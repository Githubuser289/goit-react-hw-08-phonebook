import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { UserMenu } from './UserMenu/UserMenu';

export const Layout = () => {
  let isLoggedIn = false;
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
