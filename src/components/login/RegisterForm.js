import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const page = useNavigate();
  const objTemplate = (email, password, name, picture) => ({ email, name, image: picture, password });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let a = objTemplate(email, password, name, picture);
          axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", a)
            .then((res) => page("/"))
            .catch((err) => alert("Erro ao cadastrar"));
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
        <input
          type="text"
          onChange={({ target }) => {
            if (target.value.length > 3) {
              target.style = "border-bottom: 2px solid #52b6ff";
              setName(target.value);
            } else {
              target.style = "border-bottom: 2px solid crimson";
            }
          }}
          placeholder="nome"
          required
          minLength={4}
        />
        <input
          type="url"
          onInput={({ target }) => {
            const picture = new Image();
            picture.onerror = () => (target.style = "border-bottom: 2px solid crimson");
            picture.onload = () => {
              target.style = "border-bottom: 2px solid #52b6ff";
              setPicture(target.value);
            };
            picture.src = target.value;
          }}
          placeholder="foto"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </>
  );
};
export default RegisterForm;