import React, { useEffect, useState } from "react";
import "./style.css";
import Spinner from "../../Component/Spinner";
import smallImg from "../../assets/Images/cook.jpg";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ReactImageMagnify from "react-image-magnify";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Dummy from "../../assets/Images/dummy.png";

import { FaCcApplePay } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ProductMagnify(props) {
  const location = useLocation();
  console.log("sapu-location", location?.state);
  const { type, value } = location?.state;
  const [dataDetail, setDataDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hoverImage, setHoverImage] = useState(Dummy);
  console.log("datadetail", dataDetail);

  useEffect(() => {
    getData();
  }, [type, value]);
  const getData = async () => {
    try {
      setIsLoading(true);
      let api = "";
      if (type == "id") {
        api = `https://dummyjson.com/products/${value}`;
      }
      const response = await axios.get(api);
      const { data, status } = response || {};
      if (status == 200) {
        setDataDetail(data);
        setHoverImage(data?.thumbnail);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("facing a error");
      setIsLoading(false);
    }
  };

  const {
    images = [],
    brand = [],
    category = [],
    description = [],
    title = [],
    discountPercentage = [],
    rating = [],
    price = [],
  } = dataDetail;
  const handleHoverImage = (e, image) => {
    setHoverImage(image);
  };
  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      <div className="main-cont">
        <div className="section-1">
          <div className="small-img-cont">
            {images.map((image, index) => {
              return (
                <>
                  <img
                    key={index}
                    className="small-img"
                    src={image}
                    alt="small"
                    onMouseOver={(e) => handleHoverImage(e, image)}
                  />
                </>
              );
            })}
          </div>
          <div className="large-cont">
            <ReactImageMagnify
              className="large-img"
              {...{
                smallImage: {
                  alt: "abcd",
                  isFluidWidth: true,
                  src: hoverImage,
                },
                largeImage: {
                  width: 1000,
                  height: 680,
                  src: hoverImage,
                },
                enlargedImageContainerStyle: {
                  zIndex: "1500",
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "100%",
                },
              }}
            />
            {/* <img  src={smallImg} alt="small" /> */}
            <div className="btn-cont">
              <button className="add-cart">Add Cart</button>
              <button className="buy-now">Buy now</button>
            </div>
          </div>
        </div>
        <div className="section-2">
          <h3>{description}</h3>
          <a className="a" href="/">
            Visit a i Phone Store
          </a>
          <div className="sec-1.1">
            <a className="a" href="/">
              {rating}rating |
            </a>
            <a className="a" href="/">
              1000+ Answered Questions
            </a>
            <p style={{ color: "  rgb(67, 65, 65);" }}>
              5K+ bought in past month
            </p>
          </div>
          <hr style={{ marginBottom: "1%" }} />
          <div style={{ display: "flex" }}>
            <p className="sec-cont-1">{discountPercentage}%</p>
            <p className="sec-cont-2">&#8377; {price}</p>
          </div>
          <p className="sec-cont-3">M.R.P 1000</p>
          <p className="sec-cont-4">Inclusive of all taxes</p>
          <p className="sec-cont-5">
            <strong>EMI</strong> starts at ₹ 897. No Cost EMI available
          </p>
          <hr style={{ marginBottom: "1%" }} />
          <div className="sec-1.3">
            <h6>Offers</h6>
            <div style={{ display: "flex" }}>
              <div className="sub-sec-3">
                <h6>No cost EMI</h6>
                <p className="offer-list">
                  Upto ₹1,032.87 EMI interest savings on select Credit Cards...
                </p>
                <p className="offer">2 offer</p>
              </div>
              <div className="sub-sec-3">
                <h6>Bank offer</h6>
                <p className="offer-list">
                  Upto ₹850.00 discount on Credit Cards, Federal Bank...
                </p>
                <p className="offer">14 Offer</p>
              </div>
              <div className="sub-sec-3">
                <h6>Pattner offer</h6>
                <p className="offer-list">
                  Get GST invoice and save up to 28% on business purchases
                </p>
                <p className="offer">1 Offer</p>
              </div>
            </div>
          </div>
          <hr style={{ marginBottom: "1%" }} />

          <div>
            <p
              style={{ marginBottom: "1", color: "  color: rgb(67, 65, 65);" }}
            >
              Category:
              <strong>{brand}</strong>{" "}
            </p>
          </div>
          <hr />
          <div style={{ display: "flex", fontSize: "40px", width: "100% " }}>
            <p className="ico">
              <CiDeliveryTruck className="icon-delivery" />
              <p className="delivery1">7 days Service Centre Replacement</p>
            </p>
            <p className="ico">
              <FaTrophy className="icon-delivery" />
              <p className="delivery1">Top Brand</p>
            </p>

            <p className="ico">
              <FaCcApplePay className="icon-delivery" />
              <p className="delivery1">Pay on Delivery</p>
            </p>

            <p className="ico">
              <CiDeliveryTruck className="icon-delivery" />
              <p className="delivery1">Amazon Delivered</p>
            </p>
          </div>
          <hr />

          <div>
            <p style={{ color: "  color: rgb(67, 65, 65);" }}>
              <strong> Modal Name :</strong> {category}
            </p>
            <p style={{ color: "  color: rgb(67, 65, 65);" }}>
              <strong> Brand :</strong> {brand}
            </p>
            <p style={{ color: "  color: rgb(67, 65, 65);" }}>
              <strong> Title : </strong>
              {title}
            </p>
          </div>
          <hr />
          <div>
            <h5>About the Items</h5>
            <dl>
              <dd>
                1. 16.42 Centimeters (6.5-Inch) Super AMOLED Display, FHD+
                Resolution, 1080 x 2340 Pixels Protected by Corning Gorilla
                Glass 5
              </dd>
              <dd>
                2. 50MP+8MP+2MP Triple Camera Setup - True 50MP No Shake Cam
                (F1.8) Main Camera + 8MP (F2.2) + 2MP (F2.4)| 13MP (F2.0) Front
                Camera
              </dd>
              <dd>
                3. 6000mAH ddthium-ion battery, 1 Year Manufacturer Warranty for
                Device and 6 Months Manufacturer Warranty for Inbox Accessories
                including batteries from the date of purchase
              </dd>
              <dd>
                4. Generations of OS Upgrades and 5 Years of Security Updates
              </dd>
              <dd>
                5. Exynos 1280 Octa Core 2.4GHz with the 12 Band Support for a
                True 5G Experience
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default ProductMagnify;
