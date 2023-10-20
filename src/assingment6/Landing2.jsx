import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatList from "./CatList";
import ProductList from "./ProductList";

const Landing2 = () => {
  return (
    <BrowserRouter>
      <CatList />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing2;
