import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { new_user } from "../../scripts/body-structure.js";
import { register } from "../../scripts/request.js";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const page = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          register(new_user(email, password, name, picture))
            .then(({ data }) => {
              setLoading(false);
              page("/");
            })
            .catch((err) => alert("Erro ao cadastrar"))
            .finally(() => setLoading(false));
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
          disabled={loading}
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
          disabled={loading}
          data-test="password-input"
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
          disabled={loading}
          data-test="user-name-input"
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
          disabled={loading}
          data-test="user-image-input"
        />
        <button type="submit" disabled={loading} data-test="signup-btn">
          {loading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
      <Link to="/">
        <p disabled={loading} data-test="login-link">
          Já tem uma conta? Faça login!
        </p>
      </Link>
    </>
  );
};
export default RegisterForm;
