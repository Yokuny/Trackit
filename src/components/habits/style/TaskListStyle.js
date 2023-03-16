import styled from "styled-components";
const TaskListStyle = styled.div`
  position: relative;
  width: 340px;
  height: 91px;
  padding: 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #ffffff;
  p {
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
  }
  img {
    position: absolute;
    right: 11px;
    top: 11px;
    cursor: pointer;
  }
  img:hover {
    opacity: 0.7;
  }
`;
export default TaskListStyle;
