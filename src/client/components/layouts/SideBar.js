import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SideBarItem from "../abstractions/SideBarItem";

const SideBar = props => {
  const { items, ldgItems } = props;
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    if (filter) {
      const arr = items.filter(item =>
        item.name.toLowerCase().includes(filter)
      );
      setFiltered(arr);
    } else {
      setFiltered(items);
    }
  }, [filter, items]);

  let content;

  if (Array.isArray(filtered) && filtered.length > 0) {
    content = filtered.map((item, index) => (
      <SideBarItem key={`sidebarItem-${index}`} item={item} />
    ));
  }

  const onChangeFilter = evt => {
    console.log("evt: ", evt.target.value);
    setFilter(evt.target.value.toLowerCase());
  };

  const renderList = () => content;
  const renderLoading = () => <p>Loading</p>;
  return (
    <div>
      <div className="filters">
        <input
          className="form-control"
          placeholder="Name"
          onChange={onChangeFilter}
        />
      </div>
      <ul className="item-picker">
        {ldgItems ? renderLoading() : renderList()}
      </ul>
    </div>
  );
};

SideBar.defaultProps = { items: null, ldgItems: false };

SideBar.propTypes = {
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

const ConnectedSideBar = connect(mapStateToProps)(SideBar);

export default ConnectedSideBar;
