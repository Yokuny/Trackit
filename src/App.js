import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
<<<<<<< Updated upstream
import Login from "./components/login/Login";
import Hoje from "./components/hoje/Hoje.js";
import styled from "styled-components";
const ScreenSize = styled.div`
  width: 375px;
`;
const App = () => {
  return (
    <ScreenSize>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login>
                <LoginForm />
              </Login>
            }
          />
          <Route
            path="/cadastro"
            element={
              <Login>
                <RegisterForm />
              </Login>
            }
          />
          <Route path="/hoje" element={<Hoje />} />
        </Routes>
      </BrowserRouter>
    </ScreenSize>
=======
import Habits from "./components/habits/Habits.js";
import Today from "./components/today/Today.js";
import History from "./components/history/History.js";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login>
              <LoginForm />
            </Login>
          }
        />
        <Route
          path="/cadastro"
          element={
            <Login>
              <RegisterForm />
            </Login>
          }
        />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
};
export default App;
