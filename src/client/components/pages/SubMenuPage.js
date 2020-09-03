import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Header from "../layouts/Header";
import MenuBuilder from "../layouts/MenuBuilder";
import { getItems } from "../../redux/api/items/apiItems";

const SubMenuPage = (props) => {
  useEffect(() => {
    props.getItems();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <MenuBuilder />
    </div>
  );
};

const ConnectedSubMenuPage = connect(null, { getItems })(SubMenuPage);

export default ConnectedSubMenuPage;
