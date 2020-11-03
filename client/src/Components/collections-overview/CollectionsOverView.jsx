import React from "react";
import "./CollectionsOverView.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/preview-collection";
const CollectionsOverView = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...other }) => (
      <CollectionPreview key={id} {...other} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverView);
