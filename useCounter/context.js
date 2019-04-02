import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export default function CounterContextProvider(
  initialNumber,
  maxNumber,
  minNumber
) {
  const initialState = { count: initialNumber };
  const [store, dispatch] = useReducer(reducer, initialState);

  async function increment() {
    if (store.count < maxNumber) {
      dispatch({ type: "increment" });
    }
  }

  async function decrement() {
    if (store.count > minNumber) {
      dispatch({ type: "decrement" });
    }
  }

  return createContext({ actions: { increment, decrement }, store });
}
