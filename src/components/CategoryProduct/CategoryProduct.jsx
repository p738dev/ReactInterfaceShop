import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  allProductsByCategory,
  getProductsOfCategory,
} from "../../store/categorySLice";

const CategoryProduct = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(allProductsByCategory);

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
