import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numallow, setNumAllow] = useState(false);
  const [charallow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

  const passgen = useCallback(() => {
    let str = "asdfghjklqwertyuiopzxcvbnmASDFGHJKPOIUYTREWQXCVBNM";

    if (numallow) {
      str += "1234567890";
    }
    if (charallow) {
      str += "~!@#$%^&*`";
    }

    let password = "";
    for (let index = 0; index < length; index++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(randomIndex);
    }

    setPass(password);
  }, [length, numallow, charallow]);

  const handleNumAllowChange = () => {
    setNumAllow(!numallow);
  };

  const handleCharAllowChange = () => {
    setCharAllow(!charallow);
  };

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value));
  };

  useEffect(() => {
    passgen();
  }, [passgen, length, numallow, charallow]);

  let passref = useRef(null);
  return (
    <>
      <div className="passwordgenerator text-center text-4xl bg-slate-400 h-40 mx-20 rounded-xl">
        <h1 className="mt-20 pt-4">Password Generator</h1>

        <div className="flex justify-center align-center mt-3 ">
          <input
            type="text"
            value={pass}
            className="rounded-s-xl shadow-md text-orange-600"
            ref={passref}
            // readOnly
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(pass);
              passref?.current?.select();
            }}
            className="shadow-md rounded-e-xl bg-lime-400 text-2xl p-2 "
          >
            Copy
          </button>
        </div>
        <div className="text-2xl mt-2">
          <label>Range</label>
          <input
            type="range"
            max={20}
            min={8}
            value={length}
            onChange={handleLengthChange}
            className="ms-2 me-8"
          />
          <label className="m-5">
            <input
              type="checkbox"
              name="number"
              checked={numallow}
              onChange={handleNumAllowChange}
              className="me-2 p-2"
            />
            Number
          </label>
          <label>
            <input
              type="checkbox"
              name="characters"
              checked={charallow}
              onChange={handleCharAllowChange}
              className="me-2 p-2"
            />
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
