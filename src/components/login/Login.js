import LoginLayout from "./style/LoginLayout";
import logo from "../../assets/logo-completa.svg";
const Login = ({ children }) => {
  return (
    <LoginLayout>
      <img src={logo} alt="full logo" />
      {children}
    </LoginLayout>
  );
};
export default Login;
