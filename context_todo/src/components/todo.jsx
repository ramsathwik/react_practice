import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ContextObj } from "../Store/Contexts";
function Todo({ todoes }) {
  let { deletetodo } = useContext(ContextObj);
  return (
    <div className="container" key={todoes.id}>
      <div className="row">
        <div className="col-5">{todoes.todoname}</div>
        <div className="col-4">{todoes.duedate}</div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            onClick={() => {
              deletetodo(todoes.id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
