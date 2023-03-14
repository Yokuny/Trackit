import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </>
  );
};
export default RegisterForm;
