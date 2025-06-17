import React, { useContext } from "react";
import { USERContext } from "../Context/UserContext";
import { ThemeContext } from "../Context/ThemeContext";

function ContextExampleChild() {
  const userData = useContext(USERContext);

  //{user:'lavi'}
  console.log(userData);
  return <div>ContextExampleChild :{userData?.user}</div>;
}

export default ContextExampleChild;
