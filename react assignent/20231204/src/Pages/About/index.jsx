import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import AboutPage from "../../Component/About page";

function About() {
  console.log("about javascript here");

  return (
    <React.Fragment>
      <Header />
      <AboutPage />
      <Footer />
    </React.Fragment>
  );
}
export default About;
