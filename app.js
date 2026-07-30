// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an H1"),
    React.createElement("h2", {}, "This is an H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is an H1"),
    React.createElement("h2", {}, "This is an H2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
