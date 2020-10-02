import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
export default ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <Link className="option" to="/" onClick={() => auth.signOut()}>
          SIGNOUT
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);
