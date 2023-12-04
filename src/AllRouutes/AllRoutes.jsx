import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import Analytics from "../Pages/Dashboard/Layouts/pages/Analytics";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
