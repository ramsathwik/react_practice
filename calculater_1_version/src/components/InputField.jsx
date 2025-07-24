import styles from "./inputfield.module.css";
function Inputfield() {
  return (
    <div className="inputfield">
      <input type="text" placeholder="Enter Number" className={styles.input} />
    </div>
  );
}
export default Inputfield;
