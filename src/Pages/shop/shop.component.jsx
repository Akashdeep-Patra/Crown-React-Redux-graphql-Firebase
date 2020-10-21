import React from "react";
import "./shop.component.scss";
import { Route } from "react-router-dom";
import CollectionsOverView from "../../Components/collections-overview/CollectionsOverView";
import Collection from "../collection/Collection.component";
const Shop = ({ match }) => (
  <div className="shoppage">
    <Route exact path={`${match.path}`} component={CollectionsOverView} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
