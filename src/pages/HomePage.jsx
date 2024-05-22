import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Services from "../components/Services/Services";
import {
  allProducts,
  allProductsStatus,
  getProducts,
} from "../store/productSlice";
import { STATUS } from "../utils/status";
import ProductList from "../components/ProductList/ProductList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const productStatus = useSelector(allProductsStatus);
  const products = useSelector(allProducts);

  useEffect(() => {
    dispatch(getProducts(50));
  }, [dispatch]);

  return (
    <>
      <div className="bg-[#e3edd2] pt-5 pb-5">
        <div className="py-5 px-32 flex justify-center items-center w-full">
          <div className="flex items-center mb-5">
            <div className="max-w-[450px] space-y-4 bg-white p-4 rounded-lg shadow">
              <h2 className="text-black font-bold text-2xl lg:text-3xl">
                The best collection products
              </h2>
              <h3 className="text-xl font-semibold">
                Special offerts
                <span className="text-red-600 font-medium italic"> -15%</span>
                <a
                  href="#"
                  className="flex inline-block w-32 mt-4 bg-blue-500 text-white rounded-md px-5 py-3 hover:bg-blue-600 transition-all duration-250"
                >
                  Buy Now
                </a>
              </h3>
            </div>
          </div>
        </div>
        <Services />
      </div>
      <div className="container ml-30 mt-20 flex justify-center min-h-full">
        <div className="">
          <h3 className="text-[32px] pb-12">View Ours Products</h3>
        </div>
      </div>
      <div className="w-full">
        {productStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default HomePage;
