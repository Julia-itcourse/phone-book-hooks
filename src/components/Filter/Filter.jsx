import styles from "./Filter.module.css"
const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Filter contacts
        <input
          className={styles.input}
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
