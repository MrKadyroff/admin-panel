import React from "react";
import { Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Drawer } from "./components";
import { Home, Login, Profile } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}