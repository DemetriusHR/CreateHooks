export const initialState = {
  progress: "Initial",
  login: "",
  password: "",
  id: 0
};

export function reducer(state, action) {
  switch (action.type) {
    case "onLoginInitial":
      return {
        ...state,
        login: action.usuario,
        password: action.senha
      };
    case "onLoginVerifySucess":
      return { ...state, progress: "Sucess", id: action.idUsuario };
    case "onLoginError":
      return {
        ...state,
        progress: { login: action.login, password: action.password }
      };
    default:
      return { ...state };
  }
}
