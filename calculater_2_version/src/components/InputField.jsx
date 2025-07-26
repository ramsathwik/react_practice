import styles from "./inputfield.module.css";
function Inputfield({ value }) {
  return (
    <div className="inputfield">
      <input
        type="text"
        placeholder={value ? value : "0"}
        className={styles.input}
        readOnly
      />
    </div>
  );
}
export default Inputfield;
