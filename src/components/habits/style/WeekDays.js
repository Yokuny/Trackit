import styled from "styled-components";
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const Checkbox = styled.div`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.checked ? "#DBDBDB" : "#FFFFFF")};
  font-size: 20px;
  color: ${(props) => (props.checked ? "#FFFFFF" : "#DBDBDB")};
  cursor: pointer;
`;
