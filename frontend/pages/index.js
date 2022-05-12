import { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "../src/Services/auth/authService";

export default function HomeScreen() {

  const router = useRouter();

  const [values, setValues] = useState({
    user: 'viniciuszan',
    password: 'safepassword',
  })

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        authService.login({
          username: values.user,
          password: values.password,
        })
        .then(() => {
          router.push('/auth-page-ssr');
        })
        .catch(() => {
          alert('Login failed');
        })
        
      }}>
        <input
          placeholder="Usuário" name="usuario"
          value={values.user}
          onChange={(e) => setValues({ ...values, user: e.target.value })}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <div>
          <button type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
