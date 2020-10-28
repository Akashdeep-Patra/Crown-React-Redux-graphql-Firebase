import React, { useState } from "react";
import "./signup.component.scss";
import { signUpStart } from "../../redux/user/user.actions";
// import { selectSignUpError } from "../../redux/user/user.selectors";
// import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = ({ signUpStart }) => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = formDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password, confirmPassword });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an Account</h2>
      <span className="">Signup with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGNUP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (object) => dispatch(signUpStart(object)),
});

export default connect(null, mapDispatchToProps)(SignUp);
