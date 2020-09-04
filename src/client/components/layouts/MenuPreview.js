import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuItem from "../abstractions/MenuItem";

const MenuPreview = () => (
  <div data-testid="menuPreview">
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      <li className="item">
        <h2>Dummy item</h2>
        <p>
          <span className="dietary">ve</span>
          <span className="dietary">v</span>
          <span className="dietary">n!</span>
        </p>
        <button className="remove-item">x</button>
      </li>
      <li className="item">
        <h2>Dummy item</h2>
        <p>
          <span className="dietary">ve</span>
          <span className="dietary">v</span>
          <span className="dietary">n!</span>
        </p>
        <button className="remove-item">x</button>
      </li>
      <li className="item">
        <h2>Dummy item</h2>
        <p>
          <span className="dietary">ve</span>
          <span className="dietary">v</span>
          <span className="dietary">n!</span>
        </p>
        <button className="remove-item">x</button>
      </li>
      <li className="item">
        <h2>Dummy item</h2>
        <p>
          <span className="dietary">ve</span>
          <span className="dietary">v</span>
          <span className="dietary">n!</span>
        </p>
        <button className="remove-item">x</button>
      </li>
    </ul>
  </div>
);

MenuPreview.defaultProps = { items: null, ldgItems: false };

MenuPreview.propTypes = {
  items: PropTypes.array,
  ldgItems: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { items, ldgItems } = state;
  return {
    items,
    ldgItems
  };
};

const ConnectedMenuPreview = connect(mapStateToProps)(MenuPreview);

export default ConnectedMenuPreview;
