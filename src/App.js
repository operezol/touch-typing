import React, { useState } from "react";
import KeyCap from "./components/keyCap";
import { SCKeyboard, SCKeyboardSide, SCKeyboardRow } from "./App.style";
import { SCkeyCap } from "./components/keyCap/style";

const App = () => {
  const [key, setKey] = useState("Press a key");

  const logKey = (e) => {
    setKey(e.key);
  };

  const KEYMAP = require("./keymap.json");

  document.addEventListener("keydown", logKey);

  return (
    <SCKeyboard>
      <SCKeyboardSide>
        <SCKeyboardRow>
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 0
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={2.5} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 1
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={3} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 2
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={2} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 3
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
      </SCKeyboardSide>
      <SCKeyboardSide>
        <SCKeyboardRow>
          {KEYMAP.filter(
            (keycap) => keycap.side === "right" && keycap.row === 0
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          {KEYMAP.filter(
            (keycap) => keycap.side === "right" && keycap.row === 1
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={0.1} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "right" && keycap.row === 2
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={1} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "right" && keycap.row === 3
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
      </SCKeyboardSide>
    </SCKeyboard>
  );
};

export default App;
