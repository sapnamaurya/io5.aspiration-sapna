import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import SignUpPage from "../../Component/SignupPage";

function SignUp() {
  console.log("SignUp javascript here");

  return (
    <React.Fragment>
      <Header />
      <SignUpPage />
      <Footer />
    </React.Fragment>
  );
}
export default SignUp;
