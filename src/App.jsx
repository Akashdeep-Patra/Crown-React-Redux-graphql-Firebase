import React from "react";
import "./index.scss";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/header";
import SignInandSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "../src/firebase/firebase.utils";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeAuth = null;
  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }
}
