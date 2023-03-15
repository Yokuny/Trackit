import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import Today from "./components/today/Today.js";
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
          <Route path="/hoje" element={<Today />} />
        </Routes>
      </BrowserRouter>
    </ScreenSize>
  );
};
export default App;
