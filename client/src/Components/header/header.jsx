import React from "react";
// import "./header.scss";
import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  OptionLink,
} from "./header.style";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart-icon/cart-icon";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {currentUser ? (
        <OptionLink to="/" onClick={signOutStart}>
          SIGNOUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGNIN</OptionLink>
      )}
      <OptionLink to="/contact">CONTACT</OptionLink>
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
