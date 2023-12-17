import React from "react";
// import image from "../Assests/Images/img1.webp";
import "./style.css";

function ProductCard(props) {
  console.log("---", props);
  const { price, description, title, images } = props || {};
  return (
    <React.Fragment>
      <div className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center"></div>
          <div className="row">
            <div id="product-1" className="single-product">
              <img className="part-1" src={images} alt="img" />

              <div className="part-2">
                <h3 className="product-title">{title}</h3>
                <h3 className="product-title">{description}</h3>
                <h4 className="product-old-price">$79.99</h4>
                <h4 className="product-price">{price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
