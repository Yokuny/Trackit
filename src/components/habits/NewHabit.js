import axios from "axios";
import Weekdays from "./Weekdays.js";
import AddNewHabit from "./style/AddNewHabit.js";
import { useState } from "react";
const newWeek = () => {
  function selectfalse(day) {
    return { day, select: false };
  }
  let week = ["D", "S", "T", "Q", "Q", "S", "S"];
  return week.map((day) => selectfalse(day));
};
const newHabit = (name, week) => {
  let days = [];
  week.forEach((day, index) => {
    if (day.select === true) {
      days.push(index);
    }
  });
  return { name, days };
};
const NewHabit = ({ close }) => {
  const [weekDay, setWeekDay] = useState(newWeek());
  const [task, setTask] = useState("");
  return (
    <AddNewHabit
      onSubmit={(e) => {
        e.preventDefault();
        let a = newHabit(task, weekDay);
        axios
          .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", a)
          .then((res) => alert("foi"))
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
