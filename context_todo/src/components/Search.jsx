import { useState, useRef, useContext } from "react";
import styles from "./Search.module.css";
import { MdAddCircleOutline } from "react-icons/md";
import { ContextObj } from "../Store/Contexts";
function Addtodo() {
  let { addtodo } = useContext(ContextObj);
  let todovalue = useRef(null);
  let duedatevalue = useRef(null);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            ref={todovalue}
            className={styles.inputBox}
            placeholder="Enter Your Todo"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={duedatevalue} className={styles.inputBox} />
        </div>
        <div className="col-3">
          <button
            className="btn btn-success"
            onClick={() => {
              addtodo(todovalue.current.value, duedatevalue.current.value);
              duedatevalue.current.value = "";
              todovalue.current.value = "";
            }}
          >
            <MdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
