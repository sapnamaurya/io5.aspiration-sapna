import React, { useEffect, useState } from "react";
import "./style.css";
import Spinner from "../../Component/Spinner";
import smallImg from "../../assets/Images/cook.jpg";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ReactImageMagnify from "react-image-magnify";
// import { CiDeliveryTruck } from "react-icons/ci";
// import Header from "../../components/Header";
// import SubHeader from "../../components/SubHeader";
// import { FaTrophy } from "react-icons/fa";
// import SideBar from "../../components/SideBar";
// import { HiOutlineLocationMarker } from "react-icons/hi";
import Dummy from "../../assets/Images/dummy.png";

// import { FaCcApplePay } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import Loader from "../../components/Loader";
// import ReactImageMagnify from "react-image-magnify";
// import { Button } from "react-bootstrap";
// import Footer from "../../components/Footer";

// import { useLocation } from "react-router";

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
      }
      setIsLoading(false);
    } catch (err) {
      console.error("facing a error");
      setIsLoading(false);
    }
  };

  const { images = [] } = dataDetail;
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
                  height: 1000,
                  src: hoverImage,
                },
                enlargedImageContainerStyle: {
                  zIndex: "1500",
                },
                enlargedImageContainerDimensions: {
                  width: "140%",
                  height: "250%",
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
        <div className="section-2"></div>
      </div>
      <Footer />
    </>
  );
}
export default ProductMagnify;
