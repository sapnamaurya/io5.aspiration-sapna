import React from "react";
import Login from "../../Component/Login";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

function LoginPage() {
  const currentPage = "Login";

  return (
    <React.Fragment>
      <Header curPage={currentPage} />
      <Login />
      <Footer />
    </React.Fragment>
  );
}
export default LoginPage;
