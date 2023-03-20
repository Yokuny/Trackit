import { CheckboxContainer, Checkbox } from "./style/WeekDaysStyle";
const Weekdays = ({ days, markDay, disable }) => {
  return (
    <CheckboxContainer>
      {days.map((day, index) => (
        <Checkbox
          onClick={({ target }) => {
            if (disable) return;
            if (markDay) {
              markDay((prev) =>
                prev.map((day, index) => {
                  if (target.id === `${day.day}${index}`) {
                    return { day: day.day, select: !day.select };
                  } else {
                    return day;
                  }
                })
              );
            }
          }}
          key={`${day.day}${index}`}
          id={`${day.day}${index}`}
          checked={day.select}
          disabled={disable}
          data-test="habit-day">
          {day.day}
        </Checkbox>
      ))}
    </CheckboxContainer>
  );
};
export default Weekdays;
