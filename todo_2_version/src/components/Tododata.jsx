import Todo from "./todo";
function Todoes({ tododata }) {
  return tododata.map((item) => (
    <Todo
      todoname={item.todoname}
      duedate={item.duedate}
      key={item.todoname}
    ></Todo>
  ));
}
export default Todoes;
