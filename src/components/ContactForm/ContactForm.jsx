import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './ContactForm.css';

function ContactForm() {
  const dispatch = useDispatch();
  let list = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const formElems = document.getElementsByTagName('input');
    let name = formElems[0].value;
    let number = formElems[1].value;
    if (list.filter(contact => contact.name === name).length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    let newContact = {
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
    formElems[0].value = '';
    formElems[1].value = '';
  };

  return (
    <>
      <Box
        component="form"
        id="contactsform"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <br />
        <Typography variant="h6">Please input new contact data</Typography>
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="text"
          label="Phone number"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleSubmit}
        >
          Add contact
        </Button>
      </Box>
    </>
  );
}

export default ContactForm;
