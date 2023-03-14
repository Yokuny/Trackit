import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "../../assets/logo-completa.svg";
import LoginLayout from "./LoginLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
function Login() {
  return (
    <LoginLayout>
      <img src={logo} alt="full logo" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastro" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </LoginLayout>
  );
}
export default Login;
