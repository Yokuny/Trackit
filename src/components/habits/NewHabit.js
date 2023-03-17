import Weekdays from "./Weekdays.js";
import AddNewHabit from "./style/AddNewHabit.js";
import { useState, useContext } from "react";
import { UserContext } from "../../scripts/context-data.js";
import { new_habit } from "../../scripts/body-structure.js";
import { postHabit } from "../../scripts/request.js";

const newWeek = () => {
  function selectfalse(day) {
    return { day, select: false };
  }
  let week = ["D", "S", "T", "Q", "Q", "S", "S"];
  return week.map((day) => selectfalse(day));
};

const NewHabit = ({ close }) => {
  const { token } = useContext(UserContext);
  const [weekDay, setWeekDay] = useState(newWeek());
  const [task, setTask] = useState("");
  return (
    <AddNewHabit
      onSubmit={(e) => {
        e.preventDefault();
        postHabit(new_habit(task, weekDay), token)
          .then((res) => {
            alert("foi");
            close((actual) => !actual);
          })
          .catch((res) => alert("nao foi"));
      }}
      data-test="habit-create-container">
      <input
        type="text"
        placeholder="nome do hábito"
        value={task}
        onChange={({ target }) => {
          if (target.value.length > 5) {
            target.style = "border-bottom: 2px solid #52b6ff";
          } else {
            target.style = "border-bottom: 2px solid crimson";
          }
          setTask(target.value);
        }}
        data-test="habit-name-input"
      />
      <Weekdays days={weekDay} markDay={setWeekDay} />
      <section>
        <p onClick={() => close((actual) => !actual)} data-test="habit-create-cancel-btn">
          Cancel
        </p>
        <button data-test="habit-create-save-btn">Salvar</button>
      </section>
    </AddNewHabit>
  );
};
export default NewHabit;
