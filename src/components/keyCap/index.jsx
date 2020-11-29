import React from "react";
import { SCkeyCap, SCcharacter } from "./style";
const KeyCap = ({ keycap }) => {
  return (
    <SCkeyCap>
      <SCcharacter>{keycap.key}</SCcharacter>
      <SCcharacter></SCcharacter>
      <SCcharacter>{keycap.shiftKey}</SCcharacter>
      <SCcharacter>{keycap.altKey}</SCcharacter>
    </SCkeyCap>
  );
};
export default KeyCap;
