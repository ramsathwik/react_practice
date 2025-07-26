import { useState } from "react";
import styles from "./App.module.css";
import Inputfield from "./components/InputField";
import Buttonfield from "./components/Buttonfield";

function App() {
  let [inputvalue, changeinput] = useState("");
  function changefunc(value) {
    if (value == "=") {
      let newresult = eval(inputvalue);
      changeinput(newresult);
    } else if (value == "C") {
      changeinput("");
    }
    if (value != "=" && value != "C") {
      let newvalue = inputvalue + value;
      changeinput(newvalue);
      console.log(newvalue);
    }
  }
  return (
    <div className={styles.container}>
      <Inputfield value={inputvalue}></Inputfield>
      <Buttonfield func={changefunc}></Buttonfield>
    </div>
  );
}

export default App;
