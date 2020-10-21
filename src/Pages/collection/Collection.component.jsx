import React from "react";
import "./Collection.component.scss";
import { connect } from "react-redux";
import CollectionItem from "../../Components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";
const Collection = ({ collection }) => {
  const { items, title } = collection;
  return (
    <div className="collection">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(Collection);
