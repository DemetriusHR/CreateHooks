import { useReducer, useEffect } from 'react';
import { reducer, initialState } from './reducer';
import verifyLogin from './verifyLogin';

function useLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.login !== initialState.login) {
      verifyLogin(state, dispatch);
    }
  }, [state.login, state.password]);

  function setLogin(item) {
    if (item.usuario !== state.login || item.senha !== state.password) {
      dispatch({
        type: 'onLoginInitial',
        usuario: item.usuario,
        senha: item.senha,
      });
    }
  }

  return [state, setLogin];
}

export default useLogin;
