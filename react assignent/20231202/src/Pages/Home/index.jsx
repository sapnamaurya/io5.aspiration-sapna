import React from "react";
import Header from "../../Component/Header";
import Carousal from "../../Component/Carousal";
import Footer from "../../Component/Footer";

function Home() {
  return (
    <React.Fragment>
      <Header curPage={"Home"} />
      <Carousal />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
