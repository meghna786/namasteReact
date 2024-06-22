import React from "react";
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById("root"));
let h1 = React.createElement("h1", {
      className:'heading'
}, "Hello World from React");
root.render(h1);
