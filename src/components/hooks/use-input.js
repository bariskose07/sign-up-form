import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useInput = (checkValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const isValid = checkValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const changeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
  };
};

export default useInput;
