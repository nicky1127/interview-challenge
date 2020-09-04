import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../layouts/Header";
import MenuBuilder from "../layouts/MenuBuilder";
import { getItems } from "../../redux/api/items/apiItems";

const SubMenuPage = props => {
  useEffect(() => {
    props.getItems();
  }, []);
  return (
    <div className="wrapper" data-testid="subMenuPage">
      <Header />
      <MenuBuilder />
    </div>
  );
};

SubMenuPage.propTypes = {
  getItems: PropTypes.func
};

const ConnectedSubMenuPage = connect(null, { getItems })(SubMenuPage);

export default ConnectedSubMenuPage;
