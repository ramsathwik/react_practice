import Todo from "./todo";
function Todoes({ tododata, changetodo }) {
  return tododata.map((item) => (
    <Todo
      todoname={item.todoname}
      duedate={item.duedate}
      id={item.id}
      key={item.id}
      change={changetodo}
    ></Todo>
  ));
}
export default Todoes;
