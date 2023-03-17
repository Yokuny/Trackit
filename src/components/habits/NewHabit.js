import Weekdays from "./Weekdays.js";
import AddNewHabit from "./style/AddNewHabit.js";
import { useState } from "react";
import { new_habit } from "../../scripts/body-structure.js";
import { postHabit } from "../../scripts/request.js";
const newWeek = () => {
  function selectfalse(day) {
    return { day, select: false };
  }
  let week = ["D", "S", "T", "Q", "Q", "S", "S"];
  return week.map((day) => selectfalse(day));
};

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";

const NewHabit = ({ close }) => {
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
      }}>
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
      />
      <Weekdays days={weekDay} markDay={setWeekDay} />
      <section>
        <p onClick={() => close((actual) => !actual)}>Cancel</p>
        <button>Salvar</button>
      </section>
    </AddNewHabit>
  );
};
export default NewHabit;
