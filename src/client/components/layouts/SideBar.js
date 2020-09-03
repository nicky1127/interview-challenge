import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SideBar = props => {
  const { items } = props;
  return (
    <div>
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { items } = state;
  return {
    items
  };
};

const ConnectedSideBar = connect(mapStateToProps)(SideBar);

export default ConnectedSideBar;
