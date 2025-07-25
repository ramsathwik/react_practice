import styles from "./App.module.css";
import Inputfield from "./components/InputField";
import Buttonfield from "./components/buttonfield";

function App() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <Inputfield></Inputfield>
      <Buttonfield></Buttonfield>
    </div>
  );
}

export default App;
