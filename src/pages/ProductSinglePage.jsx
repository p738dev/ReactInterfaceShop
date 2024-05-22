import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  allProductSingleStatus,
  getProductSingle,
  productSingle,
} from "../store/productSlice";
import { STATUS } from "../utils/status";
import Loader from "../components/Loader/Loader";
import {
  addToCart,
  getCartMessageStatus,
  setCartMsgOff,
  setCartMsgOn,
} from "../store/cartSlice";
import CartMessage from "../components/CartMessage/CartMessage";

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productSingle);
  const productSingleStatus = useSelector(allProductSingleStatus);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductSingle(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMsgOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  let discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const plusProductQuantity = () => {
    setQuantity((prevQuantity) => {
      let quantity = prevQuantity + 1;
      if (quantity > product.stock) quantity = product.stock;
      return quantity;
    });
  };

  const minusProductQuantity = () => {
    setQuantity((prevQuantity) => {
      let quantity = prevQuantity - 1;
      if (quantity < 1) quantity = 1;
      return quantity;
    });
  };

  const addProductToCart = (product) => {
    let discountPrice =
      product.price - (product.price * product.discountPercentage) / 100;
    let totalPrice = quantity * discountPrice.toFixed(2);

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountPrice })
    );
    dispatch(setCartMsgOn(true));
  };

  return (
    <main className="bg-white">
      <div className="">
        <div className="container lg:grid grid-cols-2 gap-2">
          <div className="bg-white p-12">
            <div className="h-[420px] overflow-hidden">
              <img
                src={product ? (product.images ? product.images[0] : "") : ""}
                alt={product.title}
                className="cover"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-[20px] pb-3 border-b-2">{product.title}</div>
            <p className="pt-3 opacity-90 text-[15px]">{product.description}</p>
            <div className="flex items-cenetr flex-wrap text-[14px] mt-10">
              <span className="text-blue-700 font-light">Rating:</span>
              <span className="ml-2">{product.rating}</span>
              <div className="w-0.5 h-4 bg-gray-500 mr-5 ml-5"></div>
              <span className="text-blue-700 font-light">Brand:</span>
              <span className="ml-2 capitalize">{product.brand}</span>
              <div className="w-0.5 h-4 bg-gray-500 mr-5 ml-5"></div>
              <span className="text-blue-700 font-light">Category:</span>
              <span className="ml-2 capitalize">{product.category}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center">
                <div className="line-through text-gray-600">
                  ${product.price}
                </div>
                <span className="text-[15px] ml-3">Old price</span>
              </div>
              <div className="flex items-center mt-3">
                <div className="bold text-[24px] text-blue-600">
                  ${discountPrice.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[16px] text-black">Quantity:</div>
              <div className="flex items-center justify-center ml-4">
                <button
                  type="button"
                  className="w-7 h-7 text-[13px] border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => minusProductQuantity()}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <div className="w-11 h-7 flex items-center justify-center border-2 border-blue-400">
                  {quantity}
                </div>
                <button
                  type="button"
                  className="w-7 h-7 text-[13px] border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => plusProductQuantity()}
                >
                  <i className="fas fa-plus"></i>
                </button>
                <div>
                  {product.stock === 0 ? (
                    <div className="uppercase pt-2 pl-5 bg-stone-700 text-white">
                      Out of stock
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex items-center justify-center ml-10">
                  <button
                    type="button"
                    className="h-11 lg:h-12  border-2 border-gray-600 p-4 flex items-center justify-center hover:opacity-70 hover:p-3"
                    onClick={() => addProductToCart(product)}
                  >
                    <span className="text-[11px] capitalize lg:text-[14px]">
                      Add to cart
                    </span>
                  </button>
                  <button className="h-11 lg:h-12 ml-5 border-2 border-gray-600 p-4 flex items-center justify-center hover:opacity-70 hover:p-3">
                    <span className="text-[11px] capitalize lg:text-[14px]">
                      buy now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartMessageStatus && <CartMessage />}
    </main>
  );
};

export default ProductSinglePage;
