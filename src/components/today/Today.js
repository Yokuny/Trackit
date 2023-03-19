import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../scripts/context-data.js";
import { dailyHabit } from "../../scripts/request.js";
import { week, day } from "../../scripts/body-structure.js";
import TodayStyle from "./style/TodayStyle.js";
import ScreenSize from "../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import TaskCard from "./TaskCard.js";

const Today = () => {
  const { token, progress, setProgress } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let taskAmount = 0;
    let taskCompleted = 0;
    dailyHabit(token)
      .then(({ data }) => {
        data.forEach((task) => {
          taskAmount++;
          if (task.done) taskCompleted++;
        });
        setProgress((taskCompleted / taskAmount) * 100);
        setTasks(data);
      })
      .catch((error) => alert("errou ao requisitar daily habit"));
  });
  return (
    <ScreenSize>
      <Header />
      <TodayStyle>
        <p data-test="today">
          {week()}, {day()}
        </p>
        <p data-test="today-counter">
          {progress > 0 ? `${progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
        </p>
      </TodayStyle>
      {tasks.length > 0 && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      <Footer />
    </ScreenSize>
  );
};
export default Today;
