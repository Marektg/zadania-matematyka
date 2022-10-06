import ContactForm from "./ContactForm";
import {ContactList} from "./ContactList";
import FilteredUsers from "./FilteredUsers";
// import isEmpty from "../utility/isEmpty";
// import { useGetContactsQuery } from 'services/phonebookApi';
// import Loader from './Loader';

const App = () => {
  // const {
  //   data: contacts,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetContactsQuery();

  // let content;
  // if (isLoading) {
  //   content = <Loader />;
  // } else if (isSuccess && !isEmpty(contacts)) {
  //   content = <ContactList contacts={contacts} />;
  // } else if (isSuccess && isEmpty(contacts)) {
  //   content = <li>There is no contacts to show</li>;
  // } else if (isError) {
  //   content = <div>{error.toString()}</div>;
  // }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ContactForm />
      <FilteredUsers />

      <ContactList />

    </div>
  );
};

export default App;
