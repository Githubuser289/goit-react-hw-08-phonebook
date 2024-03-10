import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/operations';
import { selectUser } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // const { user } = useAuth();

  function handleLogout() {
    dispatch(logOut());
    navigate('/');
  }

  return (
    <div>
      <p>Welcome, {user.name} !</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
