import styled from "styled-components";
import Header from "../Header.js";
import Footer from "../Footer.js";
import TaskCard from "./TaskCard.js";
import axios from "axios";
import dayjs from "dayjs";
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

const week = () => {
  switch (dayjs().get("day")) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
    default:
      return "Erro";
  }
};
let semana = week();
const Today = () => {
  axios
    .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", a)
    .then((res) => {
      alert("Deu certo");
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <FullScreen>
      <Header />
      <TodayInfo>
        <p>
          {semana}, {dayjs().format("DD/MM")}
        </p>
        <p>Nenhum hábito concluído ainda</p>
      </TodayInfo>
      <TaskCard />
      <Footer />
    </FullScreen>
  );
};
export default Today;
