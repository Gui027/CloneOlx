import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "react-redux";
import { Provider } from "react-redux";
import App from "./App";
import Reducers from "./Reducers";

const store = createStore(Reducers);

ReactDOM.render(<App />, document.getElementById("root"));
