import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/admin" replace />} />
        <Route path="admin" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default Router;
