import createDataContext from "./createDataContext";

const defaultData = {
  progressState: null, // There are four states - Loading, error, success and null - different component will be displayed deopending on the state
  message: null, // Determines what the message is to the user
  callback: null, // callback to passs
  error: null
};

const modalReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "setModal":
      return {
        ...state,
        progressState: action.payload.modalState,
        message: action.payload.message ?? null,
        callback: action.payload.callback ?? null
      };
    case "clear":
      return { ...state, progressState: null, message: null, callback: null };
    case "set-error": {
      return { ...state, error: action.payload.errorMessage };
    }
    case "clear-error":
      return { ...state, error: null };
  }
};

const setSuccess = (dispatch) => {
  return (message, callback) => {
    dispatch({
      type: "setModal",
      payload: { modalState: "success", message, callback }
    });
  };
};

const setLoading = (dispatch) => {
  return (message, callback) => {
    dispatch({
      type: "setModal",
      payload: { modalState: "loading", message, callback }
    });
  };
};

const clearProg = (dispatch) => {
  return () => {
    dispatch({ type: "clear" });
  };
};

const setError = (dispatch) => {
  return (error) => {
    dispatch({ type: "set-error", payload: { errorMessage: error } });
  };
};

const clearError = (dispatch) => {
  return () => {
    dispatch({ type: "clear-error" });
  };
};

export const { Provider, Context } = createDataContext(
  modalReducer,
  {
    setLoading,
    setSuccess,
    clearProg,
    setError,
    clearError
  },
  defaultData
);
