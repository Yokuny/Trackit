import { useContext } from "react";
import { UserContext } from "../scripts/context-data.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  width: 91px;
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
const Progress = styled.span`
  width: 91px;
  height: 91px;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 100%;

  position: absolute;
  bottom: 10px;
  left: calc(50% - 45px);
  background-color: #52b6ff;
`;
const styles = {
  textColor: "#ffffff",
  pathColor: "#ffffff",
  trailColor: "transparent",
};
const Footer = () => {
  const { progress } = useContext(UserContext);

  return (
    <FooterStyle data-test="menu">
      <StyledLink to="/habitos" data-test="habit-link">
        Hábitos
      </StyledLink>
      <StyledLink to="/hoje" data-test="today-link">
        <Progress>
          <CircularProgressbar
            value={progress}
            text={"Hoje"}
            className="circular-progress"
            styles={buildStyles(styles)}
          />
        </Progress>
      </StyledLink>
      <StyledLink to="/historico" data-test="history-link">
        Histórico
      </StyledLink>
    </FooterStyle>
  );
};
export default Footer;
