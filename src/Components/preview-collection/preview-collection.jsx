import React from "react";
import "./preview-collection.scss";
import CollectionItem from "../collection-item/collection-item";
export default ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((it, index) => index < 4)
        .map(({ id, ...other }) => (
          <CollectionItem key={id} {...other} />
        ))}
    </div>
  </div>
);
