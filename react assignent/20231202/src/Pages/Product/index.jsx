import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import axios from "axios";
import ProductCard from "../../Component/Product page";
import { useLocation } from "react-router-dom";
import Spinner from "../../Component/Spinner";

function Product(props) {
  const location = useLocation();
  console.log("pLocarion", location?.state);
  const { type, value } = location?.state || {};
  const [cardData, setCardData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);
  useEffect(() => {
    fethProduct();
  }, [type, value]);

  const fethProduct = async () => {
    try {
      setIsSpinner(true);
      let api = "";
      switch (type) {
        case "search":
        case "phone":
        case "laptop":
        case "macbook":
        case "book":
        case "daal":
        case "skin care":
          api = `https://dummyjson.com/products/search?q=${value}`;
          break;
        default:
          api = `https://dummyjson.com/products`;
          break;
      }

      const dataCont = await axios.get(api);
      const { data: { products = [] } = {} } = dataCont || {};

      setProductList(products);
      if (dataCont?.status == 0) {
        setIsSpinner(false);
      }
    } catch (err) {
      console.log("facing a error");
      setIsSpinner(false);
    }
  };
  const handleCart = (dataFromChild) => {
    setCardData([...cardData, dataFromChild]);
    localStorage.setItem(
      "cartData",
      JSON.stringify([...cardData, dataFromChild])
    );
  };
  //  const localStorageData

  return (
    <React.Fragment>
      <Header
        isCartEnables={true}
        cartCounting={cardData.length}
        cardData={cardData}
      />
      {!isSpinner && <Spinner />}
      <div className="parent">
        {productList.map((product, index) => {
          return (
            <ProductCard
              key={index}
              price={product?.price}
              description={product?.description}
              title={product?.title}
              image={product?.thumbnail}
              {...product}
              onCartClick={handleCart}
            />
          );
        })}
      </div>

      <Footer />
    </React.Fragment>
  );
}
export default Product;
