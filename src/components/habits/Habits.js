import { useState } from "react";
import ScreenSize from "../../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import NewHabit from "./NewHabit.js";
import TaskList from "./TaskList.js";
import { AddHabit, AddHeader, HabitCards } from "./style/HabitCards.js";
const Habits = () => {
  const [newHabit, setNewHabit] = useState(false);
  return (
    <ScreenSize>
      <Header />
      <AddHabit>
        <AddHeader>
          <p>Meus hábitos</p>
          <button onClick={() => setNewHabit((actual) => !actual)}>+</button>
        </AddHeader>
        {newHabit ? <NewHabit close={setNewHabit} /> : <></>}
      </AddHabit>
      <HabitCards>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        <TaskList />
      </HabitCards>
      <Footer />
    </ScreenSize>
  );
};
export default Habits;
