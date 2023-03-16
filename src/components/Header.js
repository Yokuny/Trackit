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
  const props =
    "https://th.bing.com/th/id/R.45f4da7079c3b2ce428ad0e155c32c13?rik=j9aZ3yM1Ql03rA&pid=ImgRaw&r=0";
  return (
    <HeaderStyle>
      <img src={logo} alt="logo" />
      <img src={props} alt="profile" />
    </HeaderStyle>
  );
};
export default Header;
