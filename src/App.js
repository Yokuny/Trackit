import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
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
  );
};
export default App;
