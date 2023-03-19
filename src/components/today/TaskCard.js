import { useState, useContext } from "react";
import { UserContext } from "../../scripts/context-data.js";
import uncheck from "../../assets/uncheck.svg";
import checked from "../../assets/checked.svg";
import { TaskCardStyle, TaskCardInfo } from "./style/TaskCardStyle";
import { accomplishTask, unaccomplishTask } from "../../scripts/request.js";

const TaskCard = ({ task }) => {
  const { token } = useContext(UserContext);
  const [taskDone, setTaskDone] = useState(task.done);
  const taskMark = ({ target }) => {
    if (task.done) {
      unaccomplishTask(target.id, token)
        .then(setTaskDone((state) => !state))
        .catch((res) => {
          setTaskDone((state) => !state);
          alert("deu errado");
        });
    } else {
      accomplishTask(target.id, token)
        .then(setTaskDone((state) => !state))
        .catch((res) => {
          setTaskDone((state) => !state);
          alert("deu errado");
        });
    }
  };
  return (
    <TaskCardStyle data-test="today-habit-container">
      <TaskCardInfo>
        <p data-test="today-habit-name">{task.name}</p>
        <p data-test="today-habit-sequence">
          Sequência atual: {task.currentSequence} dia{task.currentSequence > 0 && "s"}
        </p>
        <p data-test="today-habit-record">
          Seu recorde: {task.highestSequence} dia{task.highestSequence > 0 && "s"}
        </p>
      </TaskCardInfo>
      <img
        id={task.id}
        src={taskDone ? checked : uncheck}
        alt="check icon"
        onClick={taskMark}
        data-test="today-habit-check-btn"
      />
    </TaskCardStyle>
  );
};
export default TaskCard;
