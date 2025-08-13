import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterSlice";

// using Redux
function Home() {
  const reduxStateVal = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hi All</h1>
      <h1>{reduxStateVal?.counter?.count}</h1>
      {/* {reduxStateVal?.user?.user?.name && (
        <h1>Welcome {reduxStateVal?.user?.user?.name}</h1>
      )} */}
      {/* 
      <button onClick={() => dispatch(loginUser())}>Login</button> */}
      <button onClick={() => dispatch(increment({ count: 10 }))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* <Contact /> */}
    </>
  );
}

export default Home;
