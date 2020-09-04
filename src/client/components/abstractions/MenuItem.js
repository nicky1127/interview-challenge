import React from "react";

const MenuItem = props => {
  const { item } = props;
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
  return (
    <li className="item">
      <h2>{item.name}</h2>
      <p>{content}</p>
      <button className="remove-item">x</button>
    </li>
  );
};

export default MenuItem;
