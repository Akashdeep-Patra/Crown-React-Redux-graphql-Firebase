import React, { useEffect } from "react";
import "./shop.component.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../Components/collections-overview/CollectionsOverView.container";
import CollectionContainer from "../../Pages/collection/Collection.container";

// import axios from "axios";

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shoppage">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverViewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
