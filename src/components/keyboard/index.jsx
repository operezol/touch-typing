import React, { useState } from "react";
import KeyCap from "../keyCap";
import { SCKeyboard, SCKeyboardSide, SCKeyboardRow } from "./index.style";
import { SCkeyCap } from "../keyCap/style";

const KEYMAP = require("../../keymap.json");

const Keyboard = () => {
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
          <SCkeyCap width={3} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 1
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={3.5} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 2
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
        <SCKeyboardRow>
          <SCkeyCap width={2.25} />
          {KEYMAP.filter(
            (keycap) => keycap.side === "left" && keycap.row === 3
          ).map((keycap) => (
            <KeyCap keycap={keycap} key={keycap.key} />
          ))}
        </SCKeyboardRow>
      </SCKeyboardSide>
      <SCKeyboardSide>
        <SCKeyboardRow>
          <SCkeyCap width={0.75} />
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
          <SCkeyCap width={0.75} />
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

export default Keyboard;
