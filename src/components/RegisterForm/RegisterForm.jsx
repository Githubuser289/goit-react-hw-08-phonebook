import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './RegisterForm.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const formElems = document.getElementsByTagName('input');
    dispatch(
      register({
        name: formElems[0].value,
        email: formElems[1].value,
        password: formElems[2].value,
      })
    );
    formElems[0].value = '';
    formElems[1].value = '';
    formElems[2].value = '';
    navigate('/login');
  };

  return (
    <Box
      component="form"
      id="registerform"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <Typography variant="h6">Please enter register data</Typography>
      <TextField
        style={{ width: '200px', margin: '5px' }}
        type="text"
        label="Username"
        variant="outlined"
      />
      <br />
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
        Register
      </Button>
    </Box>
  );
};
