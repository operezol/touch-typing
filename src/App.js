 import React, { useState } from "react";
import Keyboard from "./components/keyboard";
const App = () => {
  const [key, setKey] = useState("Press a key");
  const [keycode, setKeycode] = useState("Press a key");

  const logKey = (e) => {
    setKey(e.key);
    setKeycode(e.keyCode)
  };

  document.addEventListener("keyup", logKey);

  return <>
    <Keyboard key={key} keycode={keycode}/>
    <p>{key}</p>
    <p>{keycode}</p>
  </>;
};

export default App;