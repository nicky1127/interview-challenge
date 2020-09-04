import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuItem from "../abstractions/MenuItem";

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
      <h2>Menu preview</h2>
      <ul className="menu-preview">{content}</ul>
    </div>
  );
};

MenuPreview.defaultProps = { menuItems: [] };

MenuPreview.propTypes = {
  menuItems: PropTypes.array
};

const mapStateToProps = state => {
  const { items, selectedItems } = state;
  const menuItems = [];
  selectedItems.forEach(el => {
    const obj = items.find(ele => ele.id === el);
    menuItems.push(obj);
  });
  return {
    menuItems
  };
};

const ConnectedMenuPreview = connect(mapStateToProps)(MenuPreview);

export default ConnectedMenuPreview;
