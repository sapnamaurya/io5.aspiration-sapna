import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { Button } from "react-bootstrap";
import "./style.css";

function Cart(props) {
  console.log("props", props);
  let discount = (Math.random() * 10).toFixed(0);
  let coupan = (Math.random() * 10).toFixed(0);
  let delivery = 10;
  const [total, setTotal] = useState(0);
  const localStorageGetCartData = localStorage.getItem("cartData");
  console.log("localStorageGetCartData", JSON.parse(localStorageGetCartData));
  const localGetData = JSON.parse(localStorageGetCartData);
  console.log("localGetData", localGetData);
  useEffect(() => {
    let tot = 0;
    localGetData.forEach((product) => {
      tot = tot + Number(product.price);
    });
    setTotal(tot);
  }, []);

  return (
    <>
      <Header isCartEnables={true} />
      <div className="cart-sec">
        <div className="pro-sec">
          {localGetData?.map((cartData, index) => {
            console.log("cardData", cartData);
            return (
              <div className="section-products" key={index}>
                <div className="container">
                  <div className="row">
                    <div id="product-1" className="single-product">
                      <div>
                        <img className="part" src={cartData.image} alt="img" />
                      </div>
                      <div className="part-2">
                        <h5 className="product-title">{cartData.title}</h5>
                        <h5 className="product-title1">
                          {cartData.description}
                        </h5>
                        <h4 className="product-old-price">$79.99</h4>
                        <h4 className="product-price">{cartData.price}</h4>
                        <div className="btn-cont">
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
        <div className="payment-sec">
          <h4>PRICE DETAILS</h4>
          <hr />
          <div className="dis-flex">
            <p>Price ({localGetData.length})items</p> <p>{total}</p>
          </div>
          <div className="dis-flex">
            <p>Discount </p> <p>-₹{discount}</p>
          </div>
          <div className="dis-flex">
            <p>Coupons for you </p> <p>-{coupan}</p>
          </div>
          <div className="dis-flex">
            <p>Delivery Charges </p>
            <p>
              <span className="strike">₹{Math.random().toFixed(0)}</span>
              &nbsp; ₹{delivery}
            </p>
          </div>
          <div className="dis-flex">
            <p>Total Amount </p> <p>₹{total - discount - coupan + delivery}</p>
          </div>
          You will save ₹{discount} on this order
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cart;
