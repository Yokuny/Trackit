import styled from "styled-components";
const LoginLayout = styled.div`
  width: 303px;
  padding-top: 68px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  form input,
  form button {
    box-sizing: border-box;
    height: 45px;
    border-radius: 5px;
    font-size: 20px;
  }
  form input {
    padding: 11px;
    border: 1px solid #d5d5d5;
    background: #ffffff;
    color: #4b4b4b;
  }
  form input::placeholder {
    color: #dbdbdb;
  }
  form input:disabled {
    background: #f2f2f2;
    color: #afafaf;
    cursor: not-allowed;
  }
  form button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0px solid transparent;
    background: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
    color: #fff;
    cursor: pointer;
  }
  form button:hover {
    background: #33aaf0;
  }
  form button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  p {
    margin-top: 25px;
    font-size: 14px;
    text-align: center;
    text-decoration: underline;
    color: #52b6ff;
    cursor: pointer;
  }
  p:hover {
    color: #33aaf0;
  }
`;
export default LoginLayout;
