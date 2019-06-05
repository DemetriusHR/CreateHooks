import { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { bindActionCreators } from "redux";

const useReduxStore = actions => {
  if (!ReactReduxContext) {
    throw new Error("Missing the Provider of the  `react-redux`");
  }

  const {
    store: { dispatch, getState }
  } = useContext(ReactReduxContext);
  let retorno = { state: { ...getState() }, dispatch };

  if (actions) {
    const actionsCreators = bindActionCreators(actions, dispatch);
    retorno = { actions: { ...actionsCreators }, ...retorno };

    delete retorno["dispatch"];
  }

  return retorno;
};

export default useReduxStore;