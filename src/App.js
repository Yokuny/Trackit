import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import Login from "./components/login/Login";

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
      </Routes>
    </BrowserRouter>
  );
};
export default App;
