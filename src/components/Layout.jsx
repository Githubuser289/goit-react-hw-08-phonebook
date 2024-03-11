import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Layout.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/selectors';
import { logOut } from '../redux/operations';

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  function handleLogout() {
    dispatch(logOut());
    navigate('/');
  }

  return (
    <div className="layout">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar id="appbar" position="static">
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          {isLoggedIn ? (
            <div>
              <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                {user.email}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => navigate('/register')}>
                Register
              </Button>
              <Button color="inherit" onClick={() => navigate('/login')}>
                Log In
              </Button>
            </div>
          )}
        </AppBar>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
