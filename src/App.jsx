import React from "react";
import "./index.scss";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import CheckOutPage from "./Pages/checkout/CheckOut.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/header/header";
import SignInandSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
// import {
//   auth,
//   createUserProfileDocument,
// } from "../src/firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInandSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
