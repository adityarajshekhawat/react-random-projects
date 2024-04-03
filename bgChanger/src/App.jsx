import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setBg] = useState("black");

  return (
    <>
      <div
        style={{ backgroundColor: bg }}
        className="contentwrapper  relative bg-white w-screen h-screen"
      >
        <div
          style={{ backgroundColor: bg }}
          className="btncontainer absolute bg-pink bottom-0 w-full h-12 mb-5 px-5 flex justify-evenly items-center rounded-full"
        >
          <button
            className="btn bg-white text-black"
            onClick={() => setBg("white")}
          >
            White
          </button>

          <button className="btn bg-red" onClick={() => setBg("red")}>
            Red
          </button>
          <button className="btn bg-black" onClick={() => setBg("black")}>
            Black
          </button>
          <button className="btn bg-pink " onClick={() => setBg("pink")}>
            Pink
          </button>
          <button className="btn bg-purple " onClick={() => setBg("purple")}>
            Purple
          </button>
          <button className="btn bg-yellow " onClick={() => setBg("yellow")}>
            Yellow
          </button>
          <button className="btn bg-brown " onClick={() => setBg("brown")}>
            Brown
          </button>
          <button className="btn bg-grey " onClick={() => setBg("grey")}>
            Grey
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
