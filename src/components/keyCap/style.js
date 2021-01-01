import styled from "styled-components";
const SCkeyCap = styled.div `
  border-radius: 0.2vw;
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => `${props.width}vw`};
  height: 4vw;
  background-color: rgb(250, 250, 250);
  -moz-box-shadow: inset 0 -0.05vw 0 0.1vw #000000;
  -webkit-box-shadow: inset 0 -0.05vw 0 0.1vw #000000;
  box-shadow: inset 0 -0.05vw 0 0.1vw #000000;
`;
const SCcharacter = styled.div `
  flex: 1 1 50%;
  text-align: center;
  line-height: 2vw;
  font-size: 1.4vw;
  font-weight: bolder;
  color: rgb(40, 40, 40);
`;
const SCFunctionKey = styled.div `
  flex: 1 1 100%;
  text-align: center;
  line-height: .7vw;
  font-size: .7vw;
  color: rgb(40, 40, 40);
`;
export { SCkeyCap, SCcharacter, SCFunctionKey };