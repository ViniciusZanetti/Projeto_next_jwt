import HttpClient from "../../infra/HttpClient/httpclient";

export const authService = {
  async login({ username, password }) {
    HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: 'POST',
      body: {username, password}
    })
      .then(async (respostaDoServidor) => {

        if (!respostaDoServidor.ok) {
          throw new Error('Usuário ou senha inválidos');
        }
        const body = respostaDoServidor.body;

        console.log(body);
      })
  }
};
