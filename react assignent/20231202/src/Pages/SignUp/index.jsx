import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import SignUpPage from "../../Component/SignupPage";

function SignUp() {
  const currentPage = "Signup";

  return (
    <React.Fragment>
      <Header curPage={currentPage} />

      <SignUpPage />
      <Footer />
    </React.Fragment>
  );
}
export default SignUp;
