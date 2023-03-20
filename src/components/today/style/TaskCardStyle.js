import styled from "styled-components";
export const TaskCardStyle = styled.div`
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
export const TaskCardInfo = styled.div`
  color: #666666;
  p:first-child {
    font-size: 20px;
    line-height: 25px;
  }
  p {
    font-size: 13px;
    line-height: 16px;
  }
  span {
    color: ${({ taskColor }) => taskColor};
  }
  span:last-child {
    color: ${({ hightScore }) => hightScore};
  }
`;
