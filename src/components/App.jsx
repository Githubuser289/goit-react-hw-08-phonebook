// DE REFACUT STILIZAREA !!! *****************
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
          //   <RestrictedRoute
          //     redirectTo="/register"
          //     component={<RegisterPage />}
          //   />
          // }
        />
        <Route
          path="/login"
          element={<LoginPage />}
          //   <RestrictedRoute redirectTo="/login" component={<LoginPage />} />
          // }
        />
        <Route
          path="/contacts"
          element={<ContactsPage />}
          //   <PrivateRoute redirectTo="/contacts" component={<ContactsPage />} />
          // }
        />
      </Route>
    </Routes>
  );
}

export default App;

// isRefreshing ? (
//   <b>Refreshing user...</b>
// ) : (

// );
