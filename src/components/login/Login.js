import logo from "../../assets/logo-completa.svg";
import LoginLayout from "./LoginLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
function Login() {
  return (
    <LoginLayout>
      <img src={logo} alt="full logo" />
      <LoginForm />
      <RegisterForm />
      <p>Não tem uma conta? Cadastre-se!</p>
    </LoginLayout>
  );
}
export default Login;
