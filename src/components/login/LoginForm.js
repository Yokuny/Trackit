import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const objTemplate = (email, password) => ({ email, password });
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const page = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let a = objTemplate(email, password);
          axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", a)
            .then((res) => page("/home"))
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
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </>
  );
};
export default LoginForm;
