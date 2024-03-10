import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authOperations';
// import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  const user = {
    name: 'user',
    email: 'email@server.com',
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
