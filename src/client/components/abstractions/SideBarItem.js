import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../../redux/_actions";

const SideBarItem = props => {
  const { item } = props;

  const a = ['a','c'];
  const b =[...a, 'nc'];
  console.log('b',b)

  let content;

  if (Array.isArray(item.dietaries) && item.dietaries.length > 0) {
    content = item.dietaries.map((dietary, index) => (
      <span
        key={`sidebarItem_dietary-${index}`}
        className="dietary"
        data-testid="sideBarItem"
      >
        {dietary}
      </span>
    ));
  }

  const onClickItem = () => {
    props.addItem(item.id);
  };
  return (
    <li className="item" onClick={onClickItem}>
      <h2>{item.name}</h2>
      <p>{content}</p>
    </li>
  );
};

SideBarItem.defaultProps = { item: {} };

SideBarItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    dietaries: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

const ConnectedSideBarItem = connect(null, { addItem })(SideBarItem);

export default ConnectedSideBarItem;
