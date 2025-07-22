function Addtodo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <input type="text" placeholder="Enter Your Todo" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-3">
          <button class="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
