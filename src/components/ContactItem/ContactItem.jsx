import styles from "./ContactItem.module.css";

const ContactItem = ({ name, phone, onRemoveItem, id }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={() => onRemoveItem(id)} className={styles.removeButton}>
        delete
      </button>
    </div>
  );
};

export default ContactItem;
