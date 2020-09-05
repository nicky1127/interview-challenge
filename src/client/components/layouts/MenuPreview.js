import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuItem from "../abstractions/MenuItem";
import { filterItemsById } from "../../helpers";

const MenuPreview = props => {
  const { menuItems } = props;
  let content;

  if (Array.isArray(menuItems) && menuItems.length > 0) {
    content = menuItems.map((item, index) => (
      <MenuItem key={`menuItem-${index}`} item={item} idx={index} />
    ));
  }

  return (
    <div data-testid="menuPreview">
      <h2>Menu Preview</h2>
      <ul className="menu-preview">{content}</ul>
    </div>
  );
};

MenuPreview.defaultProps = { menuItems: [] };

MenuPreview.propTypes = {
  menuItems: PropTypes.array
};

const mapStateToProps = state => {
  const { items, selectedItemIDs } = state;
  const menuItems = filterItemsById(items,selectedItemIDs) ;
  return {
    menuItems
  };
};

const ConnectedMenuPreview = connect(mapStateToProps)(MenuPreview);

export default ConnectedMenuPreview;
