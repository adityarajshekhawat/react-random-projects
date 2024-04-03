import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter :</h1>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(count<20 ? (count + 1) : (count));
          count===20 ? prompt("stopit"):""

        }}
      >
        + Count
      </button>
      <br />

      <button
        onClick={() => {
          setCount(count >0 ? (count -1) : (count));
          count === 0 ? prompt("stopit") : "";


        }}
      >
        _ Count
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        clear
      </button>
    </>
  );
}

export default App;
