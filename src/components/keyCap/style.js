import styled from "styled-components";
const SCkeyCap = styled.div`
  border: ${(props) =>
    props.width ? "1px solid transparent" : "1px solid rgb(40, 40, 40)"};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => (props.width ? `${props.width}vw` : "2vw")};
  height: 2vw;
  background-color: ${(props) =>
    props.width ? "transparent" : "rgb(40, 40, 40)"};
  box-shadow: ${(props) =>
    props.width
      ? "0 0 0 0.25vw rgba(100, 100, 100,0)"
      : "0 0 0 0.25vw rgba(100, 100, 100,1)"};
  margin: 0.25vw;
`;
const SCcharacter = styled.div`
  flex: 1 1 50%;
  text-align: center;
  line-height: 1vw;
  font-size: 0.7vw;
  color: white;
`;
export { SCkeyCap, SCcharacter };
