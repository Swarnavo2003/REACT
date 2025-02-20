import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // console.log("clicked", counter);
    if (counter >= 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    // console.log("clicked", counter);
    if (counter <= 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
