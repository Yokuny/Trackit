import { useState } from "react";
import uncheck from "../../assets/uncheck.svg";
import checked from "../../assets/checked.svg";
import { TaskCardStyle, TaskCardInfo } from "./style/TaskCardStyle";
import { accomplishTask, unaccomplishTask } from "../../scripts/request.js";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc5MDA5MTE4fQ.iJQ7BT2pIMwWLDFvTHUa76HET6ZYa78dMp0mkzfqbAk";

const TaskCard = ({ task }) => {
  const [taskDone, setTaskDone] = useState(task.done);

  const taskMark = ({ target }) => {
    if (task.done) {
      unaccomplishTask(target.id, token)
        .then((res) => setTaskDone((state) => !state))
        .catch((res) => alert("deu errado"));
    } else {
      accomplishTask(target.id, token)
        .then((res) => setTaskDone((state) => !state))
        .catch((res) => alert("deu errado"));
    }
  };

  return (
    <TaskCardStyle>
      <TaskCardInfo>
        <p>{task.name}</p>
        <p>
          Sequência atual: {task.currentSequence} dia{task.currentSequence > 0 && "s"}
        </p>
        <p>
          Seu recorde: {task.highestSequence} dia{task.highestSequence > 0 && "s"}
        </p>
      </TaskCardInfo>
      <img id={task.id} src={taskDone ? checked : uncheck} alt="check icon" onClick={taskMark} />
    </TaskCardStyle>
  );
};
export default TaskCard;
