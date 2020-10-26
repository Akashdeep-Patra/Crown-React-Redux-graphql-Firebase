import React from "react";
import "./shop.component.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../Components/collections-overview/CollectionsOverView.container";
import CollectionContainer from "../../Pages/collection/Collection.container";

// import axios from "axios";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
