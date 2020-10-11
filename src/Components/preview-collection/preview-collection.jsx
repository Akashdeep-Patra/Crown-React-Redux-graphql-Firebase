import React from "react";
import "./preview-collection.scss";
import CollectionItem from "../collection-item/collection-item";
export default ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem className="grid-item" key={item.id} item={item} />
        ))}
    </div>
  </div>
);
