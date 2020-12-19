import React, { useState } from "react";
import Keyboard from "./components/keyboard";
const App = () => {
  const [key, setKey] = useState("Press a key");

  const logKey = (e) => {
    setKey(e.key);
  };

  document.addEventListener("keydown", logKey);

  return <Keyboard />;
};

export default App;
