import React from "react";
import ReactDom from "react-dom";
import Root from "./client/Root";

import dotenv from "dotenv";
dotenv.config();

console.log(process.env.NODE_ENV);
console.log(process.env);
console.log(process.env.DEV_TEST);
console.log(process.env.REACT_APP_DEV_TEST1);

ReactDom.render(<Root />, document.getElementById("root"));
