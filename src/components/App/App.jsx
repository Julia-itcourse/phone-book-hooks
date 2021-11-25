import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const addItem = (contact) => {
    const isExisting = contacts.find((el) => el.name === contact.name);
    console.log(isExisting);
    isExisting
      ? notify("This contact is already in the list!")
      : setContacts([contact, ...contacts]);
  };

  const removeItem = (index) => {
    console.log("id", index);
    setContacts((prevContacts) => {
      return prevContacts.filter((el) => el.id !== index);
    });
  };

  const onChangeFilter = (filterValue) => {
    setFilter(filterValue);
    console.log("filterValue", filterValue);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log("visible contacts", visibleContacts);

  const notify = (message) => {
    toast(message);
    console.log("message:", message);
  };

  return (
    <>
      <ContactForm onAddItem={addItem} />
      <ToastContainer />
      {contacts.length > 1 && (
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      )}
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onRemoveItem={removeItem} />
      )}
    </>
  );
};

export default App;
