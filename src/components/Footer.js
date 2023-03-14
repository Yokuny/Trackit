import { Link } from "react-router-dom";
import styled from "styled-components";
const FooterStyle = styled.footer`
  width: 375px;
  height: 70px;
  padding: 9px 18px;
  box-sizing: border-box;
  background: #fff;

  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  font-size: 18px;
  text-align: center;
  color: #52b6ff;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <StyledLink>Hábitos</StyledLink>
      <StyledLink>Hoje</StyledLink>
      <StyledLink>Histórico</StyledLink>
    </FooterStyle>
  );
};
export default Footer;
