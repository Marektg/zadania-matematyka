import {  useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDeleteContactMutation } from 'services/phonebookApi';


const ContactList = ({ contacts }) => {
   
    const filter = useSelector(state => state.filter);
    const normalizedFilter = filter.toLowerCase().trim();

    const filteredContacts = useMemo(
        () =>
            contacts
                .filter(contact =>
                    contact.name.toLowerCase().includes(normalizedFilter)
                )
                .sort((a, b) => a.name.localeCompare(b.name)),
        [normalizedFilter, contacts]
    );

    const [deleteContact] = useDeleteContactMutation();

    const renderContacts = filteredContacts.map(({ id, name, number }) => (
                
        <li key={id}
            style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                columnGap: "20px",
                alignItems: "center",
            }
            }>
            {name}: {number}
            <button onClick={deleteContact(id)}
                style={
                    {
                        borderRadius: "15px",
                        letterSpacing: "2px",
                        backgroundClip: "#f8b4c0",
                    }
                }>
                Delete
            </button>
        </li>))
    return (
        <ul>
            {renderContacts}
        </ul>
    )
}
        

export default ContactList;