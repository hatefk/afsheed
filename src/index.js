import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/app/app.component";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
