import React, { createContext, useState, useCallback } from "react";

export const ContactListContext = createContext();

const API_URL = "https://assets.breatheco.de/apis/fake/contact/piero_mastro";

const ContactListContextProvider = ({ children }) => {
    const [contactList, setContactList] = useState([]);

    const getContactList = useCallback(async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                console.error("Error");
                return false;
            }
            const data = await response.json();
            setContactList(data);
            return true;
        } catch (error) {
            console.error(error);
        }
    }, []);

    const addNewContact = useCallback(async (data) => {
        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(API_URL, opts);
            if (!response.ok) {
                console.error("Error");
                return false;
            }
            getContactList();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }, [getContactList]);

    const deleteContact = useCallback(async (contactId) => {
        const opts = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(`${API_URL}/${contactId}`, opts);
            if (!response.ok) {
                console.error("Error");
                return false;
            }
            getContactList();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }, [getContactList]);

    const updateContact = useCallback(async (data, contactId) => {
        const opts = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(`${API_URL}/${contactId}`, opts);
            if (!response.ok) {
                console.error("Error");
                return false;
            }
            getContactList();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }, [getContactList]);

    return (
        <ContactListContext.Provider
            value={{
                contactList,
                getContactList,
                addNewContact,
                deleteContact,
                updateContact,
            }}
        >
            {children}
        </ContactListContext.Provider>
    );
};

export default ContactListContextProvider;

