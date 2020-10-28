import React, { useState } from "react";
import "./signin.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userDetails;
    emailSignInStart(email, password);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={handleChange}
          value={userDetails.email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          handleChange={handleChange}
          value={userDetails.password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign In</CustomButton>
          <CustomButton
            isGoogleSignIn
            type="button"
            onClick={googleSignInStart}
          >
            With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
