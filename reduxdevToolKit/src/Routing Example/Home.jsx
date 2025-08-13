import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterSlice";
import { loginUser } from "../Redux/userSlice";

// using Redux
function Home() {
  const reduxStateVal = useSelector((state) => state);
  const dispatch = useDispatch();

  if (reduxStateVal.user.loading) {
    return <h1>Loading ......</h1>;
  }
  if (reduxStateVal.user.error) {
    return <h1>{reduxStateVal.user.error}</h1>;
  }

  return (
    <>
      <h1>Hi All</h1>
      <h1>{reduxStateVal?.counter?.count}</h1>
      {reduxStateVal?.user?.user?.name && (
        <h1>Welcome {reduxStateVal?.user?.user?.name}</h1>
      )}
      {/* 
      <button onClick={() => dispatch(loginUser())}>Login</button> */}
      <button onClick={() => dispatch(increment({ count: 10 }))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(loginUser())}>Login</button>

      {/* <Contact /> */}
    </>
  );
}

export default Home;
