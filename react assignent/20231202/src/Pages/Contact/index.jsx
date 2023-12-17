import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

function HomePage() {
  const currentPage = "Contact";

  return (
    <React.Fragment>
      <Header curPage={currentPage} />
      <h1>HomePage</h1>
      <Footer />
    </React.Fragment>
  );
}
export default HomePage;
