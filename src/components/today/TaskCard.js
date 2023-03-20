import { useContext, useState } from "react";
import { UserContext } from "../../scripts/context-data.js";
import uncheck from "../../assets/uncheck.svg";
import checked from "../../assets/checked.svg";
import { TaskCardStyle, TaskCardInfo } from "./style/TaskCardStyle";
import { accomplishTask, unaccomplishTask } from "../../scripts/request.js";
import axios from "axios";

const TaskCard = ({ task, setTextColor, itemChange }) => {
  const { token } = useContext(UserContext);
  const [img, setImg] = useState(task.done ? checked : uncheck);
  const [color, setColor] = useState(task.done ? "#8FC549" : "#666666");

  const taskMark = ({ target }) => {
    const cacelToken = axios.CancelToken.source();
    setImg(!task.done ? checked : uncheck);
    setColor(!task.done ? "#8FC549" : "#666666");
    if (task.done) {
      unaccomplishTask(target.id, token, cacelToken).then(() => {
        itemChange(true);
        setTextColor(false);
      });
    } else {
      accomplishTask(target.id, token, cacelToken).then(() => {
        itemChange(true);
        setTextColor(true);
      });
    }
    return () => {
      setImg(task.done ? checked : uncheck);
      setColor(task.done ? "#8FC549" : "#666666");
      cacelToken.cancel();
    };
  };
  return (
    <TaskCardStyle data-test="today-habit-container">
      <TaskCardInfo
        taskColor={color}
        hightScore={
          task.highestSequence === task.currentSequence && task.highestSequence !== 0 ? "#8FC549" : "#666666"
        }>
        <p data-test="today-habit-name">{task.name}</p>
        <p data-test="today-habit-sequence">
          Sequência atual:{" "}
          <span>
            {task.currentSequence} dia{task.currentSequence > 0 && "s"}
          </span>
        </p>
        <p data-test="today-habit-record">
          Seu recorde:{" "}
          <span>
            {task.highestSequence} dia{task.highestSequence > 0 && "s"}
          </span>
        </p>
      </TaskCardInfo>
      <img id={task.id} src={img} alt="check icon" onClick={taskMark} data-test="today-habit-check-btn" />
    </TaskCardStyle>
  );
};
export default TaskCard;
