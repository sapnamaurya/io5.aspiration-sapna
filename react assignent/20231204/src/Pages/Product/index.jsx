import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ProductCard from "../../Component/Product page";

function Product() {
  console.log("Product javascript here");

  return (
    <React.Fragment>
      <Header />
      <ProductCard />
      <Footer />
    </React.Fragment>
  );
}
export default Product;
