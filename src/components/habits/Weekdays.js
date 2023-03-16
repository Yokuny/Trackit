import { CheckboxContainer, Checkbox } from "./Styles/WeekDaysStyle";
const Weekdays = ({ days, markDay }) => {
  return (
    <CheckboxContainer>
      {days.map((day, index) => (
        <Checkbox
          onClick={({ target }) => {
            markDay((prev) =>
              prev.map((day, index) => {
                if (target.id === `${day.day}${index}`) {
                  return { day: day.day, select: !day.select };
                } else {
                  return day;
                }
              })
            );
          }}
          key={`${day.day}${index}`}
          id={`${day.day}${index}`}
          checked={day.select}>
          {day.day}
        </Checkbox>
      ))}
    </CheckboxContainer>
  );
};
export default Weekdays;
