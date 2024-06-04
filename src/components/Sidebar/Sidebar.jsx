import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../store/sidebarSlice";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { allCategories, getAllCategories } from "../../store/categorySLice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const categories = useSelector(allCategories);

  useEffect(() => {
    getAllCategories();
  }, [dispatch]);

  return (
    <>
      {isSidebarOpen ? (
        <aside
          className={`fixed top-0 right-0 w-1/3 sm:w-2/3 md:w-1/3  h-full bg-white z-40 -translate-x-100 transition-all pt-10 pl-10 ${
            isSidebarOpen ? "translate-x-0" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => dispatch(setSidebarClose())}
            className="absolute right-10 text-2xl transition-all hover:text-3xl"
          >
            <MdClose />
          </button>
          <div className="border-b-2 border-gray-200 block">
            <div className="text-[32px] uppercase pt-10 pb-5">Categories</div>
            <ul className="overflow-y-scroll">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="my-2 cursor-pointer"
                >
                  <Link
                    to={`category/${category}`}
                    className="text-[16px] tracking-[0.5px] capitalize hover:ml-5 hover:opacity-50 hover:text-orange-400"
                  >
                    {category.name.replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
