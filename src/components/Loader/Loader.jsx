import React from "react";
import { loader } from "../../utils/images";

const Loader = () => {
  return (
    <div className="container">
      <div className="flex justify-center align-center">
        <img
          src={loader}
          alt="loading svg"
          className="w-24"
        />
      </div>
    </div>
  );
};

export default Loader;
