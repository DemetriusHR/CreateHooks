const loginTest = { login: "teste", password: "teste123", idUsuario: 1 };

export default function verifyLogin(login, dispatch) {
  let validator = "onLoginError";

  let actions = { login: "", password: "" };

  if (login.usuario.length > 0 && login.senha.length > 0) {
    if (
      login.usuario === loginTest.login &&
      login.senha === loginTest.password
    ) {
      validator = "onLoginVerifySucess";
      actions = { idUsuario: loginTest.idUsuario };
    } else {
      actions = { login: "Usuário Incorreto!", password: "Senha Incorreta!" };
    }
  } else {
    if (login.usuario.length === 0) {
      actions = { ...actions, login: "Digite algum Valor!" };
    }

    if (login.senha.length === 0) {
      actions = { ...actions, password: "Digite algum Valor!" };
    }
  }

  dispatch({ type: validator, ...actions });
}
