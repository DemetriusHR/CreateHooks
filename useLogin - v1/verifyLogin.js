const loginTest = { login: 'teste', password: 'teste123', idUsuario: 1 };

export default function verifyLogin(login, dispatch) {
  let validator = 'onLoginError';

  let actions = {};

  if (login.login !== '' && login.password !== '') {
    if (login.login === loginTest.login && login.password === loginTest.password) {
      validator = 'onLoginVerifySucess';
      actions = { idUsuario: loginTest.idUsuario };
    } else if (login.login !== loginTest.login && login.password !== loginTest.password) {
      actions = { login: 'Usuário Incorreto!', password: 'Senha Incorreta!' };
    } else if (login.login !== loginTest.login) {
      actions = { login: 'Usuário Incorreto!', password: '' };
    } else if (login.password !== loginTest.password) {
      actions = { login: '', password: 'Senha Incorreta!' };
    }
  }

  dispatch({ type: validator, ...actions });
}
