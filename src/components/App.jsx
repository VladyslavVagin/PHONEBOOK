import AddContactForm from './AddContactForm/AddContactForm';
import ListOfContacts from './ListOfContacts/ListOfContacts';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { useGetContactsQuery } from '../redux/contactsAPI';
import Loader from './Loader/Loader';

export const App = () => {
  const { data, isSuccess, isLoading, isError} = useGetContactsQuery();

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <AddContactForm data={data}/>
      {isLoading && <Loader/> }
      {!isLoading && !isError && <h2>Contacts</h2>}
      {!isLoading && !isError &&  <Filter />}
      {!isLoading && !isError &&   <ListOfContacts data={data} isSuccess={isSuccess}/>}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};
