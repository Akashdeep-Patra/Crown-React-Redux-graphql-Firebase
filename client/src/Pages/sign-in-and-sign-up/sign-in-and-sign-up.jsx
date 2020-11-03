import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../Components/signin/signin";
import SignUp from "../../Components/signup/signup.component";
export default (props) => (
  <div className="sign-in-and-sign-up">
    <div className="colum">
      <SignIn />
    </div>
    <div className="colum">
      <SignUp />
    </div>
  </div>
);
