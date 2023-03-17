import { useState, useEffect } from "react";
import { dailyHabit } from "../../scripts/request.js";
import { week, day } from "../../scripts/body-structure.js";

import TodayStyle from "./style/TodayStyle.js";
import ScreenSize from "../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import TaskCard from "./TaskCard.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";

const Today = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    dailyHabit(token)
      .then(({ data }) => setTasks(data))
      .catch((error) => alert("errou ao requisitar daily habit"));
  }, []);
  return (
    <ScreenSize>
      <Header />
      <TodayStyle>
        <p>
          {week()}, {day()}
        </p>
        <p>Nenhum hábito concluído ainda</p>
      </TodayStyle>
      {tasks.length > 0 && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      <Footer />
    </ScreenSize>
  );
};
export default Today;
