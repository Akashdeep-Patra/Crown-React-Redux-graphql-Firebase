import React from "react";
import "./shop.component.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/preview-collection/preview-collection";
export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shoppage">
        {collections.map(({ id, ...other }) => (
          <CollectionPreview key={id} {...other} />
        ))}
      </div>
    );
  }
}
