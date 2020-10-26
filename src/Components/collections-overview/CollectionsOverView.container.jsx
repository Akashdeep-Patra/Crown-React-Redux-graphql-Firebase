import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverView from "./CollectionsOverView";
import { compose } from "redux";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverView);

export default CollectionsOverViewContainer;
