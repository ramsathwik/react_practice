import { MdDelete } from "react-icons/md";
function Todo({ todoname, duedate, id, change }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">{todoname}</div>
        <div className="col-4">{duedate}</div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            onClick={() => {
              change(id);
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
