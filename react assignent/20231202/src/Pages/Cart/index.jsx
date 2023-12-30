import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { Button } from "react-bootstrap";
import "./style.css";

function Cart(props) {
  console.log("props", props);
  const localStorageGetCartData = localStorage.getItem("cartData");
  console.log("localStorageGetCartData", JSON.parse(localStorageGetCartData));
  const localGetData = JSON.parse(localStorageGetCartData);
  console.log("localGetData", localGetData);

  return (
    <>
      <Header isCartEnables={true} />
      <div style={{ display: "flex" }}>
        {localGetData?.map((cartData, index) => {
          console.log("cardData", cartData);
          return (
            <div className="section-products" key={index}>
              <div className="container">
                <div className="row">
                  <div id="product-1" className="single-product">
                    <img className="part-1" src={cartData.images} alt="img" />
                    <div className="part-2">
                      <h5 className="product-title">{cartData.title}</h5>
                      <h5 className="product-title">{cartData.description}</h5>
                      <h4 className="product-old-price">$79.99</h4>
                      <h4 className="product-price">{cartData.price}</h4>
                      <div className="btn-cont">
                        {/* {!alreadyAdd ? (
                    <Button
                      variant="danger"
                      onClick={(e) => handleAddCart(e, props)}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button variant="secondary" className="alreadyAdd">
                      Already to Cart
                    </Button>
                  )} */}

                        <Button variant="success">Buy Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default Cart;
