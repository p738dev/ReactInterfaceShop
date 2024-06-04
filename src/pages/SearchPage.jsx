import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  allSearchProducts,
  getSearchProduct,
  getSearchProductsStatus,
} from "../store/searchSlice";
import { STATUS } from "../utils/status";
import Loader from "../components/Loader/Loader";
import ProductList from "../components/ProductList/ProductList";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { search } = useParams();
  const searchProducts = useSelector(allSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(getSearchProduct(search));
  }, [search]);

  if (searchProducts.length === 0) {
    <h1>Empty search products</h1>;
  }

  return (
    <main className="container h-full">
      <div className=" bg-gray-500">
        <div className="py-5 px-8 flex items-center justify-center">
          <h3 className="text-white text-2xl">Search results:</h3>
        </div>
        {searchProductsStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={searchProducts} />
        )}
      </div>
    </main>
  );
};

export default SearchPage;
