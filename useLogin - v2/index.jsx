import { useReducer, useEffect } from 'react';
import { reducer, initialState } from './reducer';
import verifyLogin from './autentication';

function useLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.usuario !== initialState.usuario) {
      verifyLogin(state, dispatch);
    }
  }, [state.usuario, state.senha]);

  function setLogin(item) {
    if (item.usuario !== state.usuario || item.senha !== state.senha) {
      dispatch({
        type: 'onLoginInitial',
        usuario: item.usuario,
        senha: item.senha
      });
    }
  }

  return [state, setLogin];
}

export default useLogin;
