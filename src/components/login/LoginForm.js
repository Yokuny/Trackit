import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import { user } from "../../scripts/body-structure.js";
import { connect } from "../../scripts/request.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE5OSwiaWF0IjoxNjc4ODQ5NTY3fQ.v9PHaz77MABYdleMhkushICSnDy8VqZ_-9cnVRa896w";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const page = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          connect(user(email, password), token)
            .then((res) => page("/hoje"))
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
