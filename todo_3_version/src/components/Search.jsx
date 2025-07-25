import { useState } from "react";
import styles from "./Search.module.css";
function Addtodo({ add }) {
  const [todoname, changetodo] = useState("");
  const [duedate, changedate] = useState("");
  async function addtodoname(e) {
    let newname = e.target.value;
    changetodo(newname);
  }
  async function adddate(event) {
    let newdate = event.target.value;
    changedate(newdate);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className={styles.inputBox}
            placeholder="Enter Your Todo"
            onChange={(event) => {
              addtodoname(event);
            }}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.inputBox}
            onChange={(event) => {
              adddate(event);
            }}
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-success"
            onClick={() => {
              add(todoname, duedate);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
