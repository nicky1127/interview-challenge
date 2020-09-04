import React from "react";
import PropTypes from "prop-types";

const SideBarItem = props => {
  const { item } = props;

  let content;

  if (Array.isArray(item.dietaries) && item.dietaries.length > 0) {
    content = item.dietaries.map((dietary, index) => (
      <span key={`sidebarItem_dietary-${index}`} className="dietary" data-testid='sideBarItem'>
        {dietary}
      </span>
    ));
  }
  return (
    <li className="item">
      <h2>{item.name}</h2>
      <p>{content}</p>
    </li>
  );
};

SideBarItem.defaultProps = { item: {}};

SideBarItem.propTypes = {
    item: PropTypes.exact({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        dietaries:PropTypes.arrayOf(PropTypes.string).isRequired
      }).isRequired
};

export default SideBarItem;
