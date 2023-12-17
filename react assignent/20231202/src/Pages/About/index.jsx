import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import AboutPage from "../../Component/About page";

function About() {
  const currentPage = "About";

  return (
    <React.Fragment>
      <Header curPage={currentPage} />
      <AboutPage />
      <Footer />
    </React.Fragment>
  );
}
export default About;
