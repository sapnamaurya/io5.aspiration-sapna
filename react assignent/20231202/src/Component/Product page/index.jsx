import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

function ProductCard(props) {
  const { price, description, title, images } = props || {};
  const handleAddCart = (event, props) => {
    console.log("clicking add cart page", props);
  };
  const handleGoToPage = () => {
    console.log("clicking");
  };

  return (
    <React.Fragment>
      <div className="section-products" onClick={handleGoToPage}>
        <div className="container">
          <div className="row">
            <div id="product-1" className="single-product">
              <img className="part-1" src={images} alt="img" />

              <div className="part-2">
                <h5 className="product-title">{title}</h5>
                <h5 className="product-title">{description}</h5>
                <h4 className="product-old-price">$79.99</h4>
                <h4 className="product-price">{price}</h4>
                <div className="btn-cont">
                  <Button
                    variant="danger"
                    onClick={(e) => handleAddCart(e, props)}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="success">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
