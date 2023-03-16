import styled from "styled-components";
import ScreenSize from "../../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import TaskCard from "./TaskCard.js";
import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

const TodayInfo = styled.div`
  margin-bottom: 28px;
  width: 340px;
  p:first-child {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
`;
const PStyled = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${({ color }) => (color ? color : "#bababa")};
`;
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";
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
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(0);
  useEffect(() => {
    axios
      .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", a)
      .then((res) => {
        let count = 0;
        res.data.forEach((item) => {
          if (item.done === true) {
            count++;
          }
        });
        setDone((count / res.data.length) * 100);
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ScreenSize>
      <Header />
      <TodayInfo>
        <p>
          {semana}, {dayjs().format("DD/MM")}
        </p>
        {tasks.length === 0 || done === 0 ? (
          <PStyled>Nenhum hábito concluído ainda</PStyled>
        ) : (
          <PStyled color="#8FC549">{done.toFixed(0)}% dos hábitos concluídos</PStyled>
        )}
      </TodayInfo>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}

      <Footer />
    </ScreenSize>
  );
};
export default Today;
