import AddContactForm from "features/contacts/AddContactForm";
import ContactsList from "features/contacts/ContactsList";

export const App = () => {
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
      <AddContactForm />
      <ContactsList />
    </div>
  );
};
