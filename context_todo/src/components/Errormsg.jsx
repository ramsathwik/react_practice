import { useContext } from "react";
import { ContextObj } from "../Store/Contexts";
function Errormsg() {
  let { tododata } = useContext(ContextObj);
  return tododata.length === 0 && <h1>Welcome To Todo App</h1>;
}
export default Errormsg;
