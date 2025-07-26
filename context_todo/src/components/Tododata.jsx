import Todo from "./todo";
import { useContext } from "react";
import { ContextObj } from "../Store/Contexts";
function Todoes() {
  let { tododata } = useContext(ContextObj);
  return tododata.map((item) => <Todo todoes={item} key={item.id}></Todo>);
}
export default Todoes;
