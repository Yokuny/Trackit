import styled from "styled-components";
export const AddHabit = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
`;
export const AddHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 23px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;

    border: 0px solid transparent;
    border-radius: 5px;
    background: #52b6ff;

    font-size: 30px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.7;
  }
`;
export const HabitCards = styled.div`
  width: 338px;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
`;
