import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Otp from "./components/Otp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
};

export default AllRoutes;
