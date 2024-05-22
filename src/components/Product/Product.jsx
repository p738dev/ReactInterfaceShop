import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative justify-center border-2">
        <div className="absolute top-8 left-0  bg-gray-300 p-2 text-[14px] capitalize rounded-r-lg">
          {product.category}
        </div>
        <div className="pb-4 overflow-hidden ">
          <img
            src={product.images[0]}
            alt={product.title}
            className="cover h-[250px] w-full"
          />
        </div>
        <div className="pr-12 pb-10 pl-12 text-center opacity-80 text-[14px]">
          <div className="border-b-4 bg-slate-100">
            <span>Marka: </span>
            <span className="">{product.brand}</span>
          </div>
        </div>
        <div className="text-[14px] text-center">{product.title}</div>
        <div className="flex items-center justify-center ">
          <span className="opacity-70 line-through text-[12px] pr-2">
            ${product.price}
          </span>
          <span className="font-bold text-[16px] pr-2">
            ${product.discountPrice.toFixed(2)}
          </span>
          <span className="text-[14px] text-black-300">
            ({product.discountedPercentage}-%)
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
