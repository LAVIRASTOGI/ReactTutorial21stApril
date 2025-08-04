let initalState = {
  user: null,
};

export const userReducer = (reduxState = initalState, action) => {
  // type and payload
  switch (action?.type) {
    case "LOGIN":
      return { ...initalState, user: action.payload.user };
    default:
      return reduxState;
  }
};
