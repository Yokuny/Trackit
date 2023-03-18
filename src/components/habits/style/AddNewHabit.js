import styled from "styled-components";
const AddNewHabit = styled.form`
  width: 340px;
  height: 180px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #ffffff;
  input {
    width: 303px;
    height: 45px;
    padding: 0px 11px;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background: #ffffff;
    font-size: 20px;
    margin-bottom: 8px;
    color: #4b4b4b;
  }
  input::placeholder {
    color: #dbdbdb;
  }
  input:disabled {
    color: #dbdbdb;
    background: #f2f2f2;
    cursor: not-allowed;
  }
  section {
    margin-top: 29px;
    width: 303px;
    display: flex;
    justify-content: end;
  }
  section button:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 35px;
    margin-left: 16px;
    font-size: 16px;
    text-align: center;
    color: #52b6ff;
    cursor: pointer;
    background-color: transparent;
  }
  section p:hover {
    opacity: 0.7;
  }
  section p:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  section button {
    width: 84px;
    height: 35px;
    border: 0px solid transparent;
    border-radius: 5px;
    background: #52b6ff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
  }
  section button:hover {
    opacity: 0.7;
  }
  section button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export default AddNewHabit;
