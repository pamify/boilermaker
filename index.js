import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./client/store";
import './public/index.css';

ReactDOM.render(
  <Provider store={store}></Provider>,
  document.getElementById("app")
);
