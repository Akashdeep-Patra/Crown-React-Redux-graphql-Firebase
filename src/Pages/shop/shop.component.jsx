import React from "react";
import "./shop.component.scss";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../Components/preview-collection/preview-collection";
const Shop = ({ collections }) => (
  <div className="shoppage">
    {collections.map(({ id, ...other }) => (
      <CollectionPreview key={id} {...other} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(Shop);
