import styled from "styled-components";
import ScreenSize from "../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import TaskCard from "./TaskCard.js";
import dayjs from "dayjs";
import { dailyHabit } from "../../scripts/request.js";
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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";

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
  dailyHabit(token)
    .then((res) => {
      alert("Deu certo");
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <ScreenSize>
      <Header />
      <TodayInfo>
        <p>
          {semana}, {dayjs().format("DD/MM")}
        </p>
        <p>Nenhum hábito concluído ainda</p>
      </TodayInfo>
      <TaskCard />
      <Footer />
    </ScreenSize>
  );
};
export default Today;
