const accontTest = { id: 1, login: 'dimerRoot', password: '#Root123' };

function autentication(accont, dispatch) {
  if (
    accont.usuario === accontTest.login &&
    accont.senha === accontTest.password
  ) {
    dispatch({
      type: 'onLoginVerifySucess',
      error: false,
      sucess: true,
      id: accontTest.id,
      usuario: accontTest.login,
      senha: accontTest.password,
      English: { errorLogin: '' },
      Español: { errorLogin: '' },
      Português: { errorLogin: '' }
    });
  } else {
    dispatch({
      type: 'onLoginError',
      error: true,
      sucess: false,
      id: 0,
      English: { errorLogin: 'Email/Nickname or Password is incorrect' },
      Español: { errorLogin: 'E-mail/Apodo o Contraseña es incorrecta' },
      Português: { errorLogin: 'E-mail/Apelido ou Senha está incorreta' }
    });
  }
}

export default autentication;
