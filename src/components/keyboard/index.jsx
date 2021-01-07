import React from "react";
import KeyCap from "../keyCap";
import { SCKeyboard, SCKeyboardRow } from "./index.style";

const KEYMAP = require("../../keymap.json");

const Keyboard = () => {
  return (
    <SCKeyboard>
      <SCKeyboardRow>
        {KEYMAP.filter((keycap) => keycap.row === 0).map((keycap) => (
          <KeyCap keycap={keycap} key={keycap.key} />
        ))}
      </SCKeyboardRow>
      <SCKeyboardRow>
        {KEYMAP.filter((keycap) => keycap.row === 1).map((keycap) => (
          <KeyCap keycap={keycap} key={keycap.key} />
        ))}
      </SCKeyboardRow>
      <SCKeyboardRow>
        {KEYMAP.filter((keycap) => keycap.row === 2).map((keycap) => (
          <KeyCap keycap={keycap} key={keycap.key} />
        ))}
      </SCKeyboardRow>
      <SCKeyboardRow>
        {KEYMAP.filter((keycap) => keycap.row === 3).map((keycap) => (
          <KeyCap keycap={keycap} key={keycap.key} />
        ))}
      </SCKeyboardRow>
      <SCKeyboardRow>
        {KEYMAP.filter((keycap) => keycap.row === 4).map((keycap) => (
          <KeyCap keycap={keycap} key={keycap.key} />
        ))}
      </SCKeyboardRow>
      <SCKeyboardRow>
        {KEYMAP.filter((keycap) => keycap.row === 5).map((keycap) => (
          <KeyCap keycap={keycap} key={keycap.key} />
        ))}
      </SCKeyboardRow>
    </SCKeyboard>
  );
};

export default Keyboard;
