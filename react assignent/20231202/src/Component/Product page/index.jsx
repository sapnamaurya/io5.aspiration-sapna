import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  const { price, description, title, image, onCartClick } = props || {};
  console.log("sapu image", image);
  const [alreadyAdd, setAlreadyAdd] = useState(false);
  const handleAddCart = (event, props) => {
    onCartClick(props);
    setAlreadyAdd(true);
  };
  const handleProducts = (e, product) => {
    navigate("/product-magnify", { state: { type: "id", value: product?.id } });
  };
  return (
    <React.Fragment>
      <div className="section-products">
        <div className="container">
          <div className="row">
            <div id="product-1" className="single-product">
              <div onClick={(e) => handleProducts(e, props)}>
                <img className="part-1" src={image} alt="img" />
                <div className="part-2">
                  <h5 className="product-title">{title}</h5>
                  <h5 className="product-title1">{description}</h5>
                  <h4 className="product-old-price">$79.99</h4>
                  <h4 className="product-price">₹ {price}</h4>
                </div>{" "}
              </div>
              <div className="btn-cont">
                {!alreadyAdd ? (
                  <Button
                    variant="danger"
                    onClick={(e) => handleAddCart(e, props)}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button variant="secondary" className="alreadyAdd">
                    Already add
                  </Button>
                )}

                <Button variant="success">Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
