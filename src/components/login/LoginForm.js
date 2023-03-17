import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Rings } from "react-loader-spinner";
import { user } from "../../scripts/body-structure.js";
import { connect } from "../../scripts/request.js";
import { UserContext } from "../../scripts/context-data.js";

const LoginForm = () => {
  const { setToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const page = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          connect(user(email, password))
            .then(({ data }) => {
              setToken(data.token);
              // const img = data.image;
              console.log(data);
              page("/hoje");
            })
            .catch((err) => alert("Erro ao logar"));
        }}>
        <input
          type="email"
          onChange={({ target }) => {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)) {
              target.style = "border-bottom: 2px solid #52b6ff";
              setEmail(target.value);
            } else {
              target.style = "border-bottom: 2px solid crimson";
            }
          }}
          placeholder="email"
          required
          minLength={8}
          data-test="email-input"
        />
        <input
          type="password"
          onChange={({ target }) => {
            if (target.value.length > 5) {
              target.style = "border-bottom: 2px solid #52b6ff";
              setPassword(target.value);
            } else {
              target.style = "border-bottom: 2px solid crimson";
            }
          }}
          placeholder="senha"
          required
          minLength={6}
          data-test="password-input"
        />
        <button type="submit" data-test="login-btn">
          Entrar
        </button>
      </form>
      <Link to="/cadastro">
        <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
      </Link>
    </>
  );
};
export default LoginForm;
