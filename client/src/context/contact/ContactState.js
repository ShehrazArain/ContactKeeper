import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
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
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    // Delete Contact
    const deleteContact = id => {
        console.log(id)
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }

    // Set Current Contact
    const setCurrent = current => {
        dispatch({
            type: SET_CURRENT,
            payload: current
        })
    }

    // Clear Current Contact
    const clearContact = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }

    // Update Contact
    const updateContact = contact => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
    }

    // Filter Contact
    const filterContact = text => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: text
        })
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearContact,
                updateContact,
                filterContact,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;