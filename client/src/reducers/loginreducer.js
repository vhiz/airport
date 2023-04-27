export const INITIAL_STATE = {
  email: "",
  password: "",
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
