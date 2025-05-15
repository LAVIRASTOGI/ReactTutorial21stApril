import Button from "./Button";
import Child1comp from "./Child1comp";

function Heading({ name, age, flag, obj, arr, clickHandler }) {
  // clickHandler()
  //   console.log(props);
  return (
    <div>
      <h1>Hello {name}</h1>
      {/* <h2> your age is {age}</h2> */}
      {/* {flag && <h3>you rang flag</h3>}
      <h4>{arr.join("*")}</h4>
      <h1>{obj?.name}</h1> */}
      {/* 
      <div>
        <p>this is a paragraph</p>
      </div>  */}
      <Child1comp age={age} clickHandler={clickHandler} />
      <Button name={name} age={age} onClickHandler={clickHandler} />
    </div>
  );
}

export default Heading;
