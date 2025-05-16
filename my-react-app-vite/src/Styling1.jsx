import React from "react";
// import "./Styling1.css";
import styles from "./Styling.module.css";
function Styling1() {
  // semantic html
  return (
    <div className={styles.styling1Header}>
      <header className={styles.header}>
        <h1> external CSS </h1>
        <nav>
          <ul className="nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Welcome to my website</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <button
          className={styles.button}
          //   style={{
          //     backgroundColor: "green",
          //     color: "white",
          //     padding: "10px",
          //     borderRadius: "5px",
          //   }}
        >
          Click from styling
        </button>
      </main>
    </div>
  );
}

export default Styling1;
