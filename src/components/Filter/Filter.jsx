import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Filter.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const filter = evt.target.value.toLowerCase();
    dispatch(setFilter(filter));
  };

  return (
    <Box
      component="form"
      id="filterform"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <Typography variant="h6" className="title">
        Find contacts by name
      </Typography>
      <TextField
        id="o-form"
        style={{ width: '250px', margin: '5px' }}
        type="text"
        variant="outlined"
        onChange={handleFilterChange}
      />
    </Box>
  );
}

export default Filter;
