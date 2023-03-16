import ScreenSize from "../../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import NewHabit from "./NewHabit.js";
import { AddHabit, AddHeader, HabitCards } from "./style/HabitCards.js";
import { useState } from "react";
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
      </HabitCards>
      <Footer />
    </ScreenSize>
  );
};
export default Habits;
