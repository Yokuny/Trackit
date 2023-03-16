import Weekdays from "./Weekdays.js";
import AddNewHabit from "./Styles/AddNewHabit.js";
import { useState } from "react";
const newWeek = () => {
  function selectfalse(day) {
    return { day, select: false };
  }
  let week = ["D", "S", "T", "Q", "Q", "S", "S"];
  return week.map((day) => selectfalse(day));
};
const NewHabit = () => {
  const [weekDay, setWeekDay] = useState(newWeek());
  return (
    <AddNewHabit>
      <input type="text" placeholder="nome do hábito" />
      <Weekdays days={weekDay} markDay={setWeekDay} />
      <section>
        <p>Cancel</p>
        <p>Salvar</p>
      </section>
    </AddNewHabit>
  );
};
export default NewHabit;
