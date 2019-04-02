import { useContext } from "react";
import CounterContextProvider from "./context";

function useCounter(numberInitial = 0, minNumber = -9999, maxNumber = 9999) {
  return useContext(
    CounterContextProvider(numberInitial, maxNumber, minNumber)
  );
}

export default useCounter;
