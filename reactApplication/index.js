const headingElement = React.createElement(
  "div",
  {
    id: "headingId",
  },
  React.createElement("h1", {}, "hello world")
);

const rootele = ReactDOM.createRoot(document.getElementById("root"));

//append
rootele.render(headingElement);
