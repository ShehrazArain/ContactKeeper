import React, { Fragment, useContext } from 'react'
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Contact = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add Contacts</h4>
    }

    return (
        <Fragment >
            <div className="container">
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map(contact => (
                            <CSSTransition key={contact.id}>
                                <ContactItem contact={contact} timeout={500}
                                    classNames="item" />
                            </CSSTransition>)) :

                        contacts.map(contact => (
                            <CSSTransition key={contact.id} timeout={500}
                                classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>

            </div>
        </Fragment>
    )
}

export default Contact
