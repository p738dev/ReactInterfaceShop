import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsOfCategory } from "../../store/categorySLice";

const CategoryProduct = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(getProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className="h-96 flex justify-center items-center">
      Category page is build
    </div>
  );
};

export default CategoryProduct;
