import React from "react";
import Header from "../../Component/Header";
import Carousal from "../../Component/Carousal";
import Footer from "../../Component/Footer";

function Home() {
  console.log("Home javascript here");

  return (
    <React.Fragment>
      <Header />
      <Carousal />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
