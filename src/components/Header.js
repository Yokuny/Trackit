import { useContext } from "react";
import { UserContext } from "../scripts/context-data.js";

import styled from "styled-components";
import logo from "../assets/logo-simplificada.svg";
const HeaderStyle = styled.header`
  width: 375px;
  height: 70px;
  padding: 9px 18px;
  box-sizing: border-box;

  position: fixed;
  top: 0px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  img:last-child {
    height: 51px;
    width: 51px;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
  }
`;
const Header = () => {
  const { userImg } = useContext(UserContext);
  return (
    <HeaderStyle data-test="header">
      <img src={logo} alt="logo" />
      <img src={userImg} alt="profile" />
    </HeaderStyle>
  );
};
export default Header;
