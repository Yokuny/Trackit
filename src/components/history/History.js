import ScreenSize from "../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import styled from "styled-components";
export const HistoryStyle = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
  p:first-child {
    font-size: 23px;
    color: #126ba5;
  }
  p:last-child {
    font-size: 18px;
    color: #666666;
  }
`;
const History = () => {
  return (
    <ScreenSize>
      <Header />
      <HistoryStyle>
        <p>Histórico</p>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryStyle>
      <Footer />
    </ScreenSize>
  );
};
export default History;
