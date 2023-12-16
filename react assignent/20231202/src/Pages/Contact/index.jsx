import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

function HomePage() {
  console.log("HomePage javascript here");

  return (
    <React.Fragment>
      <Header />
      <h1>HomePage</h1>
      <Footer />
    </React.Fragment>
  );
}
export default HomePage;
