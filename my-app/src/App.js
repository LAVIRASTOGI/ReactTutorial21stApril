import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="styling1Header">
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
        <button className="button">Click from styling</button>
      </main>
    </div>
  );
}

export default App;
