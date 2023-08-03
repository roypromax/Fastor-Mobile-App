import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Dashboard from "./components/Dashboard";
import RestaurantDetails from "./components/RestaurantDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
    </Routes>
  );
};

export default AllRoutes;
