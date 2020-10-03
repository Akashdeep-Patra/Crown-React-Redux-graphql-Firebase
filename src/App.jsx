import React from "react";
import "./index.scss";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/header";
import SignInandSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
class App extends React.Component {
  unsubscribeAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
