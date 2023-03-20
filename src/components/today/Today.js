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
  const [textColor, setTextColor] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [itemChange, setItemChange] = useState(false);
  useEffect(() => {
    setItemChange(false);
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
      .catch((error) => console.log(error));
  }, [itemChange]);
  return (
    <ScreenSize>
      <Header />
      <TodayStyle color={textColor && progress > 0 ? "#8FC549" : "#666666"}>
        <p data-test="today">
          {week()}, {day()}
        </p>
        <p data-test="today-counter">
          {progress > 0 ? `${progress.toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
        </p>
      </TodayStyle>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} setTextColor={setTextColor} itemChange={setItemChange} />
        ))}
      <Footer />
    </ScreenSize>
  );
};
export default Today;
