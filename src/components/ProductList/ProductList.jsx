import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import { allProducts } from "../../store/productSlice";

const ProductList = ({ products }) => {
  //const products = useSelector(allProducts);

  return (
    <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-slate-100 my-3 pt-5 pb-5 border-2">
      {products.map((product) => {
        let discountPrice =
          product.price - product.price * (product.discountPercentage / 100);
        return (
          <Product
            key={product.id}
            product={{ ...product, discountPrice }}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
