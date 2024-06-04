import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "../../store/sidebarSlice";
import { allCategories } from "../../store/categorySLice";
import { getAllCategories } from "../../store/categorySLice";
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(allCategories);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="container">
      <nav className="w-full h-50 pt-5 pb-5">
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="h-10 flex justify-between shadow-lg ">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full border-none pl-5 focus:outline-none"
              onChange={(e) => handleSearch(e)}
            />
            <div className="w-20 flex justify-center bg-blue-400 cursor-pointer hover:opacity-75">
              <Link
                to={`search/${search}`}
                className="flex justify-center items-center"
              >
                <FaSearch />
              </Link>
            </div>
          </div>
          <div className="w-50 h-50 flex justify-end ">
            <button
              type="button"
              className="text-black text-3xl"
              onClick={() => dispatch(setSidebarOpen())}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className="pt-3">
          <ul className="flex gap-4 cursor-pointer xs:opacity-0 ">
            {categories.slice(0, 5).map((category, index) => (
              <li
                className="text-nowrap hover:opacity-85 hover:text-gray-400"
                key={index}
              >
                <Link
                  to={`category/${category}`}
                  className="capitalize text-sm"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
