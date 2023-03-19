import dayjs from "dayjs";
export const day = () => dayjs().format("DD/MM");
export const week = () => {
  switch (dayjs().get("day")) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
    default:
      return "Erro";
  }
};
//
export const user = (email, password) => ({ email, password });
export const new_user = (email, password, name, picture) => ({ email, name, image: picture, password });
export const new_habit = (name, week) => {
  let days = [];
  week.forEach((day, index) => {
    if (day.select === true) {
      days.push(index);
    }
  });
  return { name, days };
};

