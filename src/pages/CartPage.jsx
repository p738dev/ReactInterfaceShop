import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getAllCarts,
  removeProductInCart,
  toggleCartQty,
} from "../store/cartSlice";
import { shoppingCart } from "../utils/images";

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className="container my-5 flex justify-center">
        <div className="min-h-80 column justify-center items-center ml-5">
          <img
            src={shoppingCart}
            alt="shop cart"
            className="w-28 h-28"
          />
          <span className="text-[18px] text-gray-700">Your cart is empty.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 overflow-x-scroll pt-3 min-h-96">
      <div className="container">
        <div className="w-full">
          <div className="bg-white mb-3 pr-3 pl-3 rounded">
            <div className="min-h-10 border-b-2 border-gray-400 grid grid-cols-6 justify-center items-center text-[15px]">
              <div className="">
                <span className="text-[14px]">S.N</span>
              </div>
              <div className="">
                <span className="text-[14px]">Product</span>
              </div>
              <div className="">
                <span className="text-[14px]">Unit Price</span>
              </div>
              <div className="">
                <span className="text-[14px]">Quantity</span>
              </div>
              <div className="">
                <span className="text-[14px]">Total Price</span>
              </div>
              <div className="">
                <span className="text-[14px]">Actions</span>
              </div>
            </div>
          </div>
          <div className="bg-white pr-3 pl-3 text-[15px]">
            {carts.map((cart, index) => {
              return (
                <div
                  className=" min-h-10 border-b-2 border-gray-400 grid grid-cols-6 justify-center items-center text-[15px]"
                  key={cart.id}
                >
                  <div>
                    <span>{index + 1}</span>
                  </div>
                  <div>
                    <span>{cart.title}</span>
                  </div>
                  <div>
                    <span>${cart.discountPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="flex items-center justify-center text-[10px] w-6 h-6 border-2 border-gray-400"
                      onClick={() =>
                        dispatch(toggleCartQty({ id: cart.id, type: "DEC" }))
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="flex items-center justify-center text-[11px] w-5">
                      {cart.quantity}
                    </div>
                    <button
                      type="button"
                      className="flex items-center justify-center text-[10px] w-6 h-6 border-2 border-gray-400"
                      onClick={() =>
                        dispatch(toggleCartQty({ id: cart.id, type: "INC" }))
                      }
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div>
                    <span>${cart.totalPrice}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="text-[12px] text-red-600"
                      onClick={() => dispatch(removeProductInCart(cart.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="column mt-6">
            <div className="w-40 px-5 py-5 border-2 flex items-center justify-center bg-red-400 hover:bg-red-500">
              <button
                className="text-[14px]"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                Clear Cart
              </button>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-[16px]">Total({itemsCount})</div>
              <span className="text-[16px] mx-2">${totalAmount}</span>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="text-white bg-slate-500 text-[16px] px-4 py-5 "
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
