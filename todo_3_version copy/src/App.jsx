import { useState } from "react";
import Appname from "./components/Appname";
import Addtodo from "./components/Search";
import Todoes from "./components/Tododata";

function App() {
  const [tododata, changetodoes] = useState([]);
  function addtodo(todoname, duedate) {
    let newtodo = [
      ...tododata,
      {
        id: new Date().getTime(),
        todoname,
        duedate,
      },
    ];
    changetodoes(newtodo);
  }
  function deletetodo(id) {
    let newtodoes = tododata.filter((item) => item.id != id);
    changetodoes(newtodoes);
  }
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo add={addtodo}></Addtodo>
      <Todoes tododata={tododata} changetodo={deletetodo}></Todoes>
    </center>
  );
}
export default App;
