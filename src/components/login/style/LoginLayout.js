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
    color: #dbdbdb;
  }
  form button {
    border: 0px solid transparent;
    background: #52b6ff;
    color: #fff;
    cursor: pointer;
  }
  form button:hover {
    background: #33aaf0;
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
