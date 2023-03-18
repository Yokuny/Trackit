import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../scripts/body-structure.js";
import { connect } from "../../scripts/request.js";
import { UserContext } from "../../scripts/context-data.js";

const LoginForm = () => {
  const { setToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const page = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          connect(user(email, password))
            .then(({ data }) => {
              setToken(data.token);
              // const img = data.image;
              console.log(data);
              page("/hoje");
            })
            .catch((err) => {
              setLoading(false);
              alert("Erro ao logar");
            })
            .finally(() => {
              setLoading(false);
            });
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
        <button disabled={false} type="submit" data-test="login-btn">
          {loading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <Link to="/cadastro">
        <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
      </Link>
    </>
  );
};
export default LoginForm;
