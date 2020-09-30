import React from "react";
import "./collection-item.scss";

export default ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="collection-item-image"
    />
    <div className="collection-footer"></div>
    <span className="name">{name}</span>
    <span className="price">{price}</span>
  </div>
);
