import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './LoginForm.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (userLoggedIn) navigate('/contacts');
  }, [userLoggedIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const formElems = document.getElementsByTagName('input');
    dispatch(
      logIn({
        email: formElems[0].value,
        password: formElems[1].value,
      })
    );
    formElems[0].value = '';
    formElems[1].value = '';
  };
  return (
    <Box
      component="form"
      id="loginform"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <Typography variant="h6">Please enter login data</Typography>
      <TextField
        style={{ width: '200px', margin: '5px' }}
        type="text"
        label="Email"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: '200px', margin: '5px' }}
        type="password"
        label="Password"
        variant="outlined"
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};
