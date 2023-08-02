import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Dashboard from "./components/Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
