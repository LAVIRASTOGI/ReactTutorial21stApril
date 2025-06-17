import { forwardRef } from "react";

const InputComponent = forwardRef((props, ref) => {
  //   console.log(props);
  return (
    <>
      <input type="text" placeholder="age" ref={ref} />
    </>
  );
});

// const InputComponent = ({ ref }) => {
//   return (
//     <>
//       <input type="text" placeholder="age" ref={ref} />
//     </>
//   );
// };
export default InputComponent;
