import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../store/cartSlice";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(getCartItemsCount);
  const carts = useSelector(getAllCarts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <header className="pt-5 pr-10 pl-10 sticky bg-white">
      <div className="container ">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-4xl font-bold cursor-pointer">Inter-Lap</h1>
          </Link>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex items-center gap-3 hidden">
              <div className="rounded-full border-2 border-gray-400 text-gray-500 text-3xl w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200">
                <AiOutlineUser />
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500"
                >
                  Log in
                </a>
              </div>
            </div>
            <div className="text-gray-500 text-3xl relative cursor-pointer">
              <Link to={"/cart"}>
                <FiShoppingCart />
              </Link>
              <div className="absolute -top-2 -right-2 bg-blue-500 w-4 h-4 rounded-full text-black text-sm flex items-center justify-center">
                {itemsCount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-3 border border-b-indigo-500"></div>
      <div className="">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
