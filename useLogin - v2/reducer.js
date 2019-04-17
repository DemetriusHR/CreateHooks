export const initialState = {
  error: false,
  sucess: false,
  id: 0,
  usuario: '',
  senha: '',
  English: { errorLogin: '' },
  Espanol: { errorLogin: '' },
  Portugues: { errorLogin: '' }
};

export function reducer(state, action) {
  switch (action.type) {
    case 'onLoginInitial':
      return {
        ...state,
        usuario: action.usuario,
        senha: action.senha
      };
    case 'onLoginVerifySucess':
      return { ...state, ...action };
    case 'onLoginError':
      return {
        ...state,
        ...action
      };
    default:
      return { ...state };
  }
}
