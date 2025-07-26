import { createContext } from "react";

export let ContextObj = createContext({
  tododata: [],
  addtodo: () => {},
  deletetodo: () => {},
});
