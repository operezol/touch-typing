import React from "react";
import { SCkeyCap, SCcharacter, SCFunctionKey } from "./style";
import breakCamelCase from '../../helpers/breakCamelCase'
var parse = require('html-react-parser');


const KeyCap = ({ keycap }) => {
  let breaked = breakCamelCase(keycap.key);
  breaked = String(breaked);
  breaked = parse(breaked);
  return (
    <SCkeyCap width={keycap.width}>
      {
        keycap.shiftKey && keycap.altKey ?
        (
        <>
        <SCcharacter>{keycap.key}</SCcharacter>
        <SCcharacter></SCcharacter>
        <SCcharacter>{keycap.shiftKey}</SCcharacter>
        <SCcharacter>{keycap.altKey}</SCcharacter>
      </>
    ) : (
      <SCFunctionKey>{breaked}</SCFunctionKey>
    )

      }
    </SCkeyCap>
  );
};
export default KeyCap;
