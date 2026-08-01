import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="heading">Namaste React🙌</h1>;

const HeadingComponent = () => (
  <div>
    <Title />
    <h2 className="heading">React Functional Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
