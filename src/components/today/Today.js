import styled from "styled-components";
import Header from "../Header.js";
import Footer from "../Footer.js";
const FullScreen = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  padding: calc(28px + 70px) 18px 70px 18px;
`;
const TodayInfo = styled.div``;
const TaskCard = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
`;
const Today = () => {
  return (
    <FullScreen>
      <Header />
      <TodayInfo>
        <p>Segunda, 17/05</p>
        <p>Nenhum hábito concluído ainda</p>
      </TodayInfo>
      <TaskCard>
        <div>
          <p>Ler 1 capítulo de livro</p>
          <p>Sequência atual: 3 dias Seu recorde: 5 dias</p>
          <p>Seu recorde: 5 dias</p>
        </div>
        <img src="" alt="check icon" />
      </TaskCard>
      <Footer />
    </FullScreen>
  );
};
export default Today;
