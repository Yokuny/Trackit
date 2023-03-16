import Weekdays from "./Weekdays.js";
import TaskListStyle from "./style/TaskListStyle.js";
import TrashCan from "../../assets//trash-can.svg";
const newWeek = () => {
  function selectfalse(day) {
    return { day, select: false };
  }
  let week = ["D", "S", "T", "Q", "Q", "S", "S"];
  return week.map((day) => selectfalse(day));
};
let a = newWeek();
a[2].select = true;
a[4].select = true;
const TaskList = () => {
  return (
    <TaskListStyle>
      <img src={TrashCan} alt="remove" />
      <p>Ler 1 capítulo de livro</p>
      <Weekdays days={a} />
    </TaskListStyle>
  );
};
export default TaskList;
