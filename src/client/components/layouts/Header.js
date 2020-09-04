import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Header = props => {
  const { dishNum, dietariesNum } = props;

  let content;

  if (Array.isArray(dietariesNum) && dietariesNum.length > 0) {
    content = dietariesNum.map(dietary => (
      <span>
        <span>{`${dietary.num}`}</span>{" "}
        <span className="dietary">{`${dietary.dietary}`}</span>
      </span>
    ));
  }

  return (
    <div className="menu-summary" data-testid="header">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{`${dishNum} TOTAL DISHES`}</span>
          </div>
          <div className="col-6 menu-summary-right">{content}</div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = { selectedItems: [] };

Header.propTypes = {
  selectedItems: PropTypes.array
};

const mapStateToProps = state => {
  const { selectedItems, items } = state;
  const dietaries = ["v", "ve", "df", "gf", "n!", "rsf"];
  const menuItems = [];

  selectedItems.forEach(el => {
    const obj = items.find(ele => ele.id === el);
    menuItems.push(obj);
  });

  const dietariesNum = [];
  dietaries.forEach(dietary => {
    let num = 0;
    menuItems.forEach(item => {
      item.dietaries.find(el => el === dietary) && num++;
    });
    num && dietariesNum.push({ dietary, num });
  });

  return {
    dishNum: selectedItems.length,
    dietariesNum
  };
};

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
