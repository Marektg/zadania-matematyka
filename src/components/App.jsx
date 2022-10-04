import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import FilteredUsers from "./FilteredUsers";
import { useSelector } from 'react-redux';
import isEmpty from "../utility/isEmpty";

const App = () => {
  const state = useSelector(state => state.contacts);
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
      {isEmpty(state) ? (
        <li>There is no contacts to show</li>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default App;
