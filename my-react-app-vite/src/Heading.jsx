import Button from "./Button";

function Heading({ name, age, flag, obj, arr, clickHandler }) {
  // clickHandler()
  //   console.log(props);
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2> your age is {age}</h2>
      {flag && <h3>you rang flag</h3>}
      <h4>{arr.join("*")}</h4>
      <h1>{obj?.name}</h1>

      <div>
        <p>this is a paragraph</p>
      </div>
      <Button name={name} age={age} />
    </div>
  );
}

export default Heading;
