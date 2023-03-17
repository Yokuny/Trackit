import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./scripts/context-data.js";
import Login from "./components/login/Login";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import Habits from "./components/habits/Habits.js";
import Today from "./components/today/Today.js";
import History from "./components/history/History.js";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
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
      </UserProvider>
    </BrowserRouter>
  );
};
export default App;

