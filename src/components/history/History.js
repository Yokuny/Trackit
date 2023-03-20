import ScreenSize from "../ScreenSize.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import HistoryStyle from "./style/HistoryStyle.js";

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
