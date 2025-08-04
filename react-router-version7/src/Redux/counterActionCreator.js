import { loginUserService } from "../api/services";

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

export function loginUser() {
  return async function (dispatch) {
    let data = await loginUserService();
    dispatch({
      type: "LOGIN",
      payload: {
        user: data?.user,
      },
    });
  };
  // cannot api call
  // return user value
  // return {
  //   type:'LOGIN',
  //   payload:user
  // }
}
