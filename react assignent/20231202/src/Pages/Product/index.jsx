import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import axios from "axios";
import ProductCard from "../../Component/Product page";

function Product() {
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
  console.log("----", productList);
  const currentPage = "Product";

  return (
    <React.Fragment>
      <Header curPage={currentPage} />
      <div className="parent">
        {productList.map((product, index) => {
          return (
            <ProductCard
              price={product?.price}
              description={product?.description}
              title={product?.title}
              images={product?.thumbnail}
            />
          );
        })}
      </div>

      <Footer />
    </React.Fragment>
  );
}
export default Product;
