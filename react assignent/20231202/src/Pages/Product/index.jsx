import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import axios from "axios";
import ProductCard from "../../Component/Product page";

function Product() {
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fethProduct();
  }, []);

  const fethProduct = async () => {
    const api = `https://dummyjson.com/products`;

    const dataCont = await axios.get(api);
    const { data: { products = [] } = {} } = dataCont || {};
    setProductList(products);
  };
  const handleCart = (dataFromChild) => {
    console.log("parent to child", dataFromChild);
  };
  console.log("----", productList);

  return (
    <React.Fragment>
      <Header curPage={"Product"} cartCounting={200} />
      <div className="parent">
        {productList.map((product, index) => {
          return (
            <ProductCard
              price={product?.price}
              description={product?.description}
              title={product?.title}
              images={product?.thumbnail}
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
