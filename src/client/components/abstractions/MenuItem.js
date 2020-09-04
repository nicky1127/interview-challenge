import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeItem } from "../../redux/_actions";

const MenuItem = props => {
  const { item, idx } = props;
  let content;
  if (Array.isArray(item.dietaries) && item.dietaries.length > 0) {
    content = item.dietaries.map((dietary, index) => (
      <span
        key={`menuItem_dietary-${index}`}
        className="dietary"
        data-testid="menuItem_dietary"
      >
        {dietary}
      </span>
    ));
  }

  const onClickBtn = () => {
    props.removeItem(idx);
  };
  return (
    <li className="item" data-testid="menuItem">
      <h2>{item.name}</h2>
      <p>{content}</p>
      <button className="remove-item" onClick={onClickBtn}>
        x
      </button>
    </li>
  );
};

MenuItem.propTypes = {
  removeItem: PropTypes.func
};

const ConnectedMenuItem = connect(null, { removeItem })(MenuItem);

export default ConnectedMenuItem;
