import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maharashtra from "./Maharashtra";
import Telangana from "./Telangana";
import Andhra from "./Andhra";
import Punjab from "./Punjab";
import Nav from "./Nav";
import Iphone from "./Iphone";
import Samsung from "./Samsung";
import Realme from "./Realme";
import Redme from "./Redme";
import Oneplus from "./Oneplus";
import NavList from "./NavList";

const Landing = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <NavList />
      <Routes>
        {/* <Route path="/" element={<Maharashtra />} /> */}
        {/* <Route path="/telangana" element={<Telangana />} /> */}
        {/* <Route path="/andhra" element={<Andhra />} /> */}
        {/* <Route path="/punjab" element={<Punjab />} /> */}
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/realme" element={<Realme />} />
        <Route path="/redme" element={<Redme />} />
        <Route path="/oneplus" element={<Oneplus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
