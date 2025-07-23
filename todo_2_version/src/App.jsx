import Appname from "./components/Appname";
import Addtodo from "./components/Search";
import Todo from "./components/todo";
import Todoes from "./components/Tododata";

function App() {
  const tododata = [
    {
      todoname: "Buy Milk",
      duedate: "7/10/2025",
    },
    {
      todoname: "Go To College",
      duedate: "4/10/2025",
    },
  ];
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Todoes tododata={tododata}></Todoes>
    </center>
  );
}
export default App;
