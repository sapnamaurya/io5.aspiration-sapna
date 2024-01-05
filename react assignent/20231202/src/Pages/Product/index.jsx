import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import axios from "axios";
import ProductCard from "../../Component/Product page";

function Product() {
  const [cardData, setCardData] = useState([]);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fethProduct();
  }, []);

  const fethProduct = async () => {
    const api = `https://dummyjson.com/products`;

    const dataCont = await axios.get(api);
    const { data: { products = [] } = {} } = dataCont || {};
    setProductList(products);
    console.log("api", products);
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
