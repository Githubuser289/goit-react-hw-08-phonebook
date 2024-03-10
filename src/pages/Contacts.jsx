import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from '../redux/selectors';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  return (
    <>
      <p>contacts page</p>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <p>ContactForm</p>
      <div>{isLoading && 'Request in progress...'}</div>
      <p>ContactList</p>
    </>
  );
}
