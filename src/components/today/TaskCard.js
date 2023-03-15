import styled from "styled-components";
import uncheck from "../../assets/uncheck.svg";
const TaskCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  height: 94px;
  padding: 13px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
  img {
    cursor: pointer;
    background-color: #ffffff;
  }
  img:hover {
    opacity: 0.7;
  }
`;
const TaskCardInfo = styled.div`
  color: #666666;
  p:first-child {
    font-size: 20px;
    line-height: 25px;
  }
  p {
    font-size: 13px;
    line-height: 16px;
  }
`;
const TaskCard = () => {
  return (
    <TaskCardStyle>
      <TaskCardInfo>
        <p>Ler 1 capítulo de livro</p>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
      </TaskCardInfo>
      <img src={uncheck} alt="check icon" />
    </TaskCardStyle>
  );
};
export default TaskCard;
