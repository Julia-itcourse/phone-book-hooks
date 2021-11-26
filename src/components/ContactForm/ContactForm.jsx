import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const contactInfo = {
      name,
      number,
      id: nanoid(),
    };
    onAddItem(contactInfo);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          Name
          <input
            name="name"
            className={styles.input}
            value={name}
            onChange={changeName}
            placeholder=" "
            required
          />
        </label>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          Phone number
          <input
            name="number"
            className={styles.input}
            value={number}
            onChange={changeNumber}
            placeholder=" "
            required
          />
        </label>
      </div>
      <button type="submit" className={styles.addButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
