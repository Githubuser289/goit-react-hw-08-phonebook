import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../redux/authOperations';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100px',
    paddingTop: '50px',
  },
};

export default function Home() {
  const dispatch = useDispatch();

  function handleLogin(evt) {
    evt.preventDefault();
    console.log('login');
    dispatch(
      logIn({
        name: 'Iuser Iou',
        email: 'iuser@mail.com',
        password: 'iuser1234',
      })
    );
  }
  function handleLogout(evt) {
    evt.preventDefault();
    console.log('logout');
    dispatch(logOut());
  }
  function handleRegister(evt) {
    evt.preventDefault();
    console.log('register');
    // dispatch(
    //   register({
    //     name: 'Iuser Iou',
    //     email: 'iuser@mail.com',
    //     password: 'iuser1234',
    //   })
    // );
  }

  return (
    <div style={styles.container}>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
