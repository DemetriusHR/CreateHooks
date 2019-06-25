import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import verifyLogin from "./verifyLogin";

function useLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setLogin(item) {
    dispatch({
      type: "onLoginInitial",
      ...item
    });

    verifyLogin(item, dispatch);
  }

  return [state, setLogin];
}

export default useLogin;
