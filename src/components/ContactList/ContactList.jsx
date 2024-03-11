import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import './ContactList.css';

function ContactList() {
  const dispatch = useDispatch();
  let list = useSelector(selectVisibleContacts);

  function handleClick(evt) {
    const elem = evt.target.parentElement;
    dispatch(deleteContact(elem.id));
  }

  return (
    <Box
      component="form"
      id="contactslist"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {list.map(contact => {
          const labelId = `checkbox-list-label-${contact.name}`;

          return (
            <ListItem
              key={contact.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleClick}
                >
                  <DeleteIcon id={contact.id} />
                </IconButton>
              }
              disablePadding
            >
              <ArrowRightIcon />
              <ListItemText
                id={labelId}
                primary={`${contact.name}: ${contact.number}`}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default ContactList;
