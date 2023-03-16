import Weekdays from "./Weekdays.js";
import TaskListStyle from "./style/TaskListStyle.js";
import TrashCan from "../../assets//trash-can.svg";
import axios from "axios";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";
let b = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const TaskList = ({ task }) => {
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
    <TaskListStyle>
      <img
        src={TrashCan}
        alt="remove"
        id={task.id}
        onClick={({ target }) => {
          axios
            .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${target.id}`, b)
            .then((res) => {
              console.log("deletou");
              console.log(res.data);
            })
            .catch((res) => alert("nao foi"));
        }}
      />
      <p>{task.name}</p>
      <Weekdays days={weekDays} />
    </TaskListStyle>
  );
};
export default TaskList;
