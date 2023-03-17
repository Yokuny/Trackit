import Weekdays from "./Weekdays.js";
import TaskListStyle from "./style/TaskListStyle.js";
import TrashCan from "../../assets/trash-can.svg";
import { deleteHabit } from "../../scripts/request.js";
import { useContext } from "react";
import { UserContext } from "../../scripts/context-data.js";

const TaskList = ({ task }) => {
  const { token } = useContext(UserContext);
  const newWeek = () => {
    function selectfalse(day) {
      return { day, select: false };
    }
    let week = ["D", "S", "T", "Q", "Q", "S", "S"];
    return week.map((day) => selectfalse(day));
  };
  const weekDays = newWeek();
  task.days.forEach((weekDay) => {
    weekDays[weekDay].select = true;
  });

  return (
    <TaskListStyle data-test="habit-container">
      <img
        src={TrashCan}
        alt="remove"
        id={task.id}
        onClick={({ target }) => {
          deleteHabit(target.id, token)
            .then((res) => {
              alert("deletou");
            })
            .catch((res) => alert("nao foi"));
        }}
        data-test="habit-delete-btn"
      />
      <p data-test="habit-name">{task.name}</p>
      <Weekdays days={weekDays} />
    </TaskListStyle>
  );
};
export default TaskList;
