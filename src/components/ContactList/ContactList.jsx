import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveItem }) => {
  console.log("inContact List", contacts);
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <ContactItem
            id={contact.id}
            name={contact.name}
            phone={contact.number}
            onRemoveItem={onRemoveItem}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
