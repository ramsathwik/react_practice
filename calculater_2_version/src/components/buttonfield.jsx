import styles from "./Buttonfield.module.css";
function Buttonfield({ func }) {
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
        <button
          key={item}
          className={styles.btn}
          onClick={() => {
            func(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default Buttonfield;
