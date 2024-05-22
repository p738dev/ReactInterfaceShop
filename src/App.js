import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductSinglePage from "./pages/ProductSinglePage";
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/product/:id"
            element={<ProductSinglePage />}
          />
          <Route
            path="/category/:category"
            element={<CategoryProduct />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/search/:search"
            element={<SearchPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
