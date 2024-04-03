import { useState } from "react";
import React from "react";
import "./App.css";
import Card from './components/Card';

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black pb-4 rounded-xl">Vite + React</h1>
      <Card text={"leave"} btntext={"leave the team"}/>
      <Card text={"pass"} btntext={"join the team"}/>
    </>
  );
}

export default App;
