import React from "react";

function List({ nameArr, clickArrHndler }) {
  return (
    <div>
      {/* ["lavi", "niteesh", "abhijet"]*/}
      <h1>{nameArr.join("_")}</h1>
      <ul>
        {/* <li>{nameArr[0]}</li>
        <li>{nameArr[1]}</li>
        <li>{nameArr[2]}</li> */}
        {nameArr.map((ele, index) => {
          return <li key={ele + index}>{ele}</li>;
        })}
        {/* [<li>{ele}</li>,<li>{ele}</li>,<li>{ele}</li>] */}
      </ul>
      <button onClick={clickArrHndler}>Fetch List</button>
    </div>
  );
}

export default List;
