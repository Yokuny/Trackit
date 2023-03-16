import ScreenSize from "../../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import NewHabit from "./NewHabit.js";
import { AddHabit, AddHeader, HabitCards } from "./style/HabitCards.js";
const Habits = () => {
  return (
    <ScreenSize>
      <Header />
      <AddHabit>
        <AddHeader>
          <p>Meus hábitos</p>
          <button>+</button>
        </AddHeader>
        <NewHabit />
      </AddHabit>
      <HabitCards>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </HabitCards>
      <Footer />
    </ScreenSize>
  );
};
export default Habits;
