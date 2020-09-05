import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterItemsById, getNumsOfAllDiets } from "../../helpers";
const Header = props => {
  const { dishNum, dietariesNum } = props;

  let content;

  if (Array.isArray(dietariesNum) && dietariesNum.length > 0) {
    content = dietariesNum.map((dietary, index) => (
      <span className="dietary_num" key={`dietary_num_${index}`}>
        <span>{`${dietary.num}x`}</span>{" "}
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

Header.defaultProps = { dishNum: 0, dietariesNum: [] };

Header.propTypes = {
  dishNum: PropTypes.number.isRequired,
  dietariesNum: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { selectedItemIDs, items } = state;

  const menuItems = filterItemsById(items, selectedItemIDs);

  const dietariesNum = getNumsOfAllDiets(menuItems);

  return {
    dishNum: selectedItemIDs.length,
    dietariesNum
  };
};

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
