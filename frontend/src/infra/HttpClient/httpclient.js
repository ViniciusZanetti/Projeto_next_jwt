export default async function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      'Content-type': 'application/json',
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  }

  return fetch(fetchUrl, options)
    .then(async (respostaDoServidor) => {
      return {
        body: await respostaDoServidor.json(),
        ok: respostaDoServidor.ok,
      }
    });
}
