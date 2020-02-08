import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App title={`I'm from props`} />, document.getElementById("root"));
serviceWorker.unregister();
