import { useState } from "react";
import Appname from "./components/Appname";
import Addtodo from "./components/Search";
import Todoes from "./components/Tododata";
import Errormsg from "./components/Errormsg";
import { ContextObj } from "./Store/Contexts";

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
      <ContextObj.Provider
        value={{
          tododata,
          addtodo,
          deletetodo,
        }}
      >
        <Appname></Appname>
        <Addtodo></Addtodo>
        <Errormsg></Errormsg>
        <Todoes></Todoes>
      </ContextObj.Provider>
    </center>
  );
}
export default App;
