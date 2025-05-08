const headingElement = React.createElement(
  "div",
  {
    id: "headingId",
  },
  React.createElement("h1", {}, [
    React.createElement("h1", {}, "This is a span"),
    React.createElement("h2", {}, "This is a span"),
    React.createElement("h3", {}, "This is a span"),
    React.createElement("h4", {}, "This is a span"),
    React.createElement("h5", {}, "This is a span"),
    React.createElement("h6", {}, "This is a span"),
  ])
);

const rootele = ReactDOM.createRoot(document.getElementById("root"));

//append
rootele.render(headingElement);
