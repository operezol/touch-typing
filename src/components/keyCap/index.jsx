import React from "react";
import { SCkeyCap, SCcharacter, SCFunctionKey } from "./style";
const KeyCap = ({ keycap }) => {
  return (
    <SCkeyCap width={keycap.width}>
      {keycap.key ? (
        <>
          <SCcharacter>{keycap.key}</SCcharacter>
          <SCcharacter></SCcharacter>
          <SCcharacter>{keycap.shiftKey}</SCcharacter>
          <SCcharacter>{keycap.altKey}</SCcharacter>
        </>
      ) : (
        <SCFunctionKey>{keycap.functionKey}</SCFunctionKey>
      )}
    </SCkeyCap>
  );
};
export default KeyCap;
