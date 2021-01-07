import styled from "styled-components";
const SCkeyCap = styled.div`
  border-radius: 0.4vw;
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => `${props.width}vw`};
  height: 4vw;
  background: rgb(230, 230, 230);
  background: radial-gradient(
    circle,
    rgba(230, 230, 230, 1) 0%,
    rgba(250, 250, 250, 1) 100%
  );
  position: relative;
  padding: 0.2vw 0.2vw 0.4vw 0.2vw;
  margin: 0.1vw;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 0.2vw solid rgba(200, 200, 200, 0.2);
    border-left: 0.2vw solid rgba(150, 150, 150, 0.2);
    border-right: 0.2vw solid rgba(150, 150, 150, 0.2);
    border-bottom: 0.4vw solid rgba(100, 100, 100, 0.2);
    border-radius: 0.4vw;
  }
`;
const SCcharacter = styled.div`
  flex: 1 1 50%;
  text-align: center;
  line-height: 1.4vw;
  font-size: 1vw;
  font-weight: bolder;
  color: rgb(40, 40, 40);
`;
const SCFunctionKey = styled.div`
  flex: 1 1 100%;
  text-align: center;
  line-height: 1.5vw;
  font-size: 1.5vw;
  color: rgb(40, 40, 40);
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;
export { SCkeyCap, SCcharacter, SCFunctionKey };
