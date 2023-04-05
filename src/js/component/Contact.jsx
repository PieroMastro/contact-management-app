import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactsContext } from "path/to/contactlist/context";

const Contact = ({ contact }) => {
    const context = useContext(ContactsContext);

    const handleDelete = () => {
        context.deleteContact(contact.id);
    };

    return (
        <div className="card card-contact mb-3">
            <div className="row">
                <div className="col-12 col-lg-3 d-flex p-2 justify-content-center align-items-center">
                    <img
                        src="https://picsum.photos/200/300"
                        className="img-round"
                        alt="..."
                    />
                </div>
                <div className="col-12 col-lg-7">
                    <div className="card-body">
                        <h5 className="card-title">{contact.full_name}</h5>
                        <p className="card-text">
                            <i className="fa-solid fa-location-dot"></i> {contact.address}
                        </p>
                        <p className="card-text">
                            <i className="fa-solid fa-phone"></i> {contact.phone}
                        </p>
                        <p className="card-text">
                            <i className="fa-solid fa-envelope"></i> {contact.email}
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-2 d-flex  justify-content-evenly my-2">
                    <div>
                        <i className="fa-solid fa-trash px-2" onClick={handleDelete}></i>
                        <Link to={`/editcontact/${contact.id}`} className="text-dark px-2">
                            <i className="fa-solid fa-pen"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
