/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./components/css/index.css";
import App from "./components/App";
import store from './configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
