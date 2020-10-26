import React from "react";
import "./shop.component.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionsOverView from "../../Components/collections-overview/CollectionsOverView";
import Collection from "../collection/Collection.component";
// import axios from "axios";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  async componentDidMount() {
    const { updateCollections } = this.props;
    // const dbResponse = axios.get(
    //   "https://firestore.googleapis.com/v1/projects/crown-db-d3bdf/databases/(default)/documents/collections"
    // );
    // console.log(dbResponse);
    const collectionRef = firestore.collection("collections");
    const snapShot = await collectionRef.get();
    const collectionsMap = await convertCollectionsSnapShotToMap(snapShot);
    updateCollections(collectionsMap);
    this.setState({ loading: false });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shoppage">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverViewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
