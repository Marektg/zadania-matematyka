import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAllContacts } from './contactSlice';

const ContactsList = () => {

    const contacts = useSelector(selectAllContacts)
    
    const renderContacts = contacts.map((contact) => {
        return (
            <li key={contact.id}
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    columnGap: "20px",
                    alignItems: "center",
                }
                }>
                {contact.name}: {contact.number}
                {/*<button onClick={() => { remove(contact.id) }}
                    style={
                        {
                            borderRadius: "15px",
                            letterSpacing: "2px",
                            backgroundClip: "#f8b4c0",
                        }
                    }>
                    Delete
                </button>*/}</li >)
    })

  return (
      <ul>
      {renderContacts}
      </ul>
  )
}

ContactsList.propTypes = {}

export default ContactsList