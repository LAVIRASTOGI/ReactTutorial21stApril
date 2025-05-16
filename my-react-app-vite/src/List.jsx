import React from "react";
import styles from "./App.module.css";
function List({ nameArr, clickArrHndler }) {
  return (
    <div>
      {/* ["lavi", "niteesh", "abhijet"]*/}
      {/* scoped globally */}
      <h1 className="text-center">{nameArr.join("_")}</h1>
      <ul>
        {/* <li>{nameArr[0]}</li>
        <li>{nameArr[1]}</li>
        <li>{nameArr[2]}</li> */}
        {nameArr.map((ele, index) => {
          return <li key={ele + index}>{ele}</li>;
        })}
        {/* [<li>{ele}</li>,<li>{ele}</li>,<li>{ele}</li>] */}
      </ul>
      {/* scoped locally */}
      <button onClick={clickArrHndler} className={styles.button}>
        Fetch List
      </button>
    </div>
  );
}

export default List;
