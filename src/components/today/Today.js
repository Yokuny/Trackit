import styled from "styled-components";
import Header from "../Header.js";
import Footer from "../Footer.js";
import TaskCard from "./TaskCard.js";
import axios from "axios";
const FullScreen = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  padding-top: calc(28px + 70px);
  padding-bottom: calc(70px + 10px);
`;
const TodayInfo = styled.div`
  margin-bottom: 28px;
  width: 340px;
  p:first-child {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  p:last-child {
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
`;
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4ODQ5NTY3fQ.v9PHaz77MABYdleMhkushICSnDy8VqZ_-9cnVRa896w";
let a = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const Today = () => {
  axios
    .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", a)
    .then((response) => {
      alert("Deu certo");
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <FullScreen>
      <Header />
      <TodayInfo>
        <p>Segunda, 17/05</p>
        <p>Nenhum hábito concluído ainda</p>
      </TodayInfo>
      <TaskCard />
      <Footer />
    </FullScreen>
  );
};
export default Today;
