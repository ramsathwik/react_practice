import styles from "./Search.module.css";
function Addtodo() {
  console.log(styles);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className={styles.inputBox}
            placeholder="Enter Your Todo"
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.inputBox} />
        </div>
        <div className="col-3">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
