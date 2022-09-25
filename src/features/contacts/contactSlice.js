import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


const initialState = [
    { id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56' },
    { id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12' },
    { id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79' },
    { id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26' },

]

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducer: {
        contactAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllContacts = (state) => state.contacts;

export const { contactAdded } = contactsSlice.actions;

export default contactsSlice.reducer