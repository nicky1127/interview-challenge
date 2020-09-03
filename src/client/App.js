import React from "react";
import "./App.css";

import Header from "./components/layouts/Header";
import MenuBuilder from "./components/layouts/MenuBuilder";

export default () => (
  <div className="wrapper">
    <Header />
    <MenuBuilder/>
  </div>
);
