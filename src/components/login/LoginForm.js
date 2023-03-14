import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <>
      <form>
        <input type="email" placeholder="email" />
        <input type="text" placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </>
  );
};
export default LoginForm;
