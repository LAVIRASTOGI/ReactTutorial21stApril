let initalState = {
  count: 10,
};

export const counterReducer = (reduxState = initalState, action) => {
  // type and payload
  switch (action?.type) {
    case "increment":
      return { ...initalState, count: reduxState.count + action.payload.count };
    case "decrement":
      return { ...initalState, count: reduxState.count - 1 };
    default:
      return reduxState;
  }
};
