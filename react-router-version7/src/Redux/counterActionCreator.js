export function increment() {
  // no API calls
  return {
    type: "increment",
    payload: {
      count: 5,
    },
  };
}
export function decrement() {
  return { type: "decrement" };
}
