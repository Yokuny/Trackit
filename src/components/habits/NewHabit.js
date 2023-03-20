import Weekdays from "./Weekdays.js";
import AddNewHabit from "./style/AddNewHabit.js";
import { ThreeDots } from "react-loader-spinner";
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

const NewHabit = ({ close, refresh, inputTask, setInputTask }) => {
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [weekDay, setWeekDay] = useState(newWeek());
  return (
    <AddNewHabit
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        postHabit(new_habit(inputTask, weekDay), token)
          .then((res) => {
            setLoading(false);
            setInputTask("");
            refresh(true);
            close((actual) => !actual);
          })
          .catch((err) => err.response.data.message)
          .finally(() => setLoading(false));
      }}
      data-test="habit-create-container">
      <input
        type="text"
        placeholder="nome do hábito"
        value={inputTask}
        onChange={({ target }) => {
          if (target.value.length > 5) {
            target.style = "border-bottom: 2px solid #52b6ff";
          } else {
            alert("O nome do hábito deve ter no mínimo 6 caracteres");
            target.style = "border-bottom: 2px solid crimson";
          }
          setInputTask(target.value);
        }}
        disabled={loading}
        data-test="habit-name-input"
      />
      <Weekdays days={weekDay} markDay={setWeekDay} disable={loading} />
      <section>
        <button
          onClick={() => close((actual) => !actual)}
          disabled={loading}
          data-test="habit-create-cancel-btn">
          Cancel
        </button>
        <button data-test="habit-create-save-btn" disabled={loading}>
          {loading ? (
            <ThreeDots
              height="10"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Salvar"
          )}
        </button>
      </section>
    </AddNewHabit>
  );
};
export default NewHabit;
