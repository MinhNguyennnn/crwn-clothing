import React from "react";


import SignIn from '../../components/sign-in/sign-in.component';

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h2>Sign in and Sign Out</h2>
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;