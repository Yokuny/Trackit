import { useEffect, useState } from "react";
import ScreenSize from "../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import NewHabit from "./NewHabit.js";
import TaskList from "./TaskList.js";
import { AddHabit, AddHeader, HabitCards } from "./style/HabitCards.js";
import { taskList } from "../../scripts/request";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";

const Habits = () => {
  const [newHabit, setNewHabit] = useState(false);
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    taskList(token)
      .then((res) => setTask(res.data))
      .catch((res) => alert("nao foi"));
  }, []);
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
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskList key={task.id} task={task} />)
        ) : (
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        )}
      </HabitCards>
      <Footer />
    </ScreenSize>
  );
};
export default Habits;
