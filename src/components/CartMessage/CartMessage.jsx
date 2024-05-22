import React from "react";
import { correct } from "../../utils/images";

const CartMessage = () => {
  return (
    <div className="fixed top-1/2 left-1/2 bg-slate-300 rounded text-center py-7 px-7">
      <div className="mb-8 flex items-center justify-center">
        <img
          src={correct}
          alt="correct icon"
          className="w-11 h-11 "
        />
      </div>
      <h6 className="text-black text-[14px] capitalize">
        Success add product to cart.
      </h6>
    </div>
  );
};

export default CartMessage;
