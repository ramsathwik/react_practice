import styles from "./buttonfield.module.css";
function Buttonfield() {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btncontainer}>
      {buttons.map((item) => (
        <button className={styles.btn}>{item}</button>
      ))}
    </div>
  );
}
export default Buttonfield;
