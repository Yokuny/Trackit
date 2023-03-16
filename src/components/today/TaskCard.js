import styled from "styled-components";
import uncheck from "../../assets/uncheck.svg";
import checked from "../../assets/checked.svg";
import axios from "axios";
const TaskCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  height: 94px;
  padding: 13px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  img {
    cursor: pointer;
    fill: #8fc549;
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
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4OTY1MDM3fQ.d73JwvrK89Eyj2VLJfnzxF_YyrTItzwWVvqmpHAEp6k";
let a = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const TaskCard = ({ task }) => {
  console.log(task);
  return (
    <TaskCardStyle>
      <TaskCardInfo>
        <p>{task.name}</p>
        <p>
          Sequência atual: {task.currentSequence} dia{task.currentSequence > 0 && "s"}
        </p>
        <p>
          Seu recorde: {task.highestSequence} dia{task.highestSequence > 0 && "s"}
        </p>
      </TaskCardInfo>
      <img
        id={task.id}
        src={task.done ? checked : uncheck}
        alt="check icon"
        onClick={({ target }) => {
          if (task.done) {
            console.log("entrou no if");
            axios
              .post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${target.id}/uncheck`,
                {},
                a
              )
              .then((res) => {
                console.log("deu certo");
              })
              .catch((res) => {
                alert("deu errado");
              });
          } else {
            console.log("entrou no else");
            axios
              .post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${target.id}/check`,
                {},
                a
              )
              .then((res) => {
                console.log("deu certo");
              })
              .catch((res) => {
                alert("deu errado");
              });
          }
          task.done = !task.done;
          target.src = task.done ? uncheck : checked;
        }}
      />
    </TaskCardStyle>
  );
};
export default TaskCard;
