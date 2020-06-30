import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Sheraz",
                email: "sheraz@gmail.com",
                phone: "03462931512",
                type: "personal"
            },
            {
                id: 2,
                name: "Ali",
                email: "Ali@gmail.com",
                phone: "03462931513",
                type: "personal"
            },
            {
                id: 3,
                name: "Ahmed",
                email: "Ahmed@gmail.com",
                phone: "03462931514",
                type: "professional"
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contact

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;