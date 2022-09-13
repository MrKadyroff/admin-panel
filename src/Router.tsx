import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import { Drawer } from "./components";
import { Home, Login, Profile } from "./pages";
import Register from "./pages/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/app" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Drawer />}>
        <Route path="/admin" element={<Home />} />
        <Route path="app" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<>Not found page</>} />
      </Route>
      <Route path="*" element={<>Not found page</>} />
    </Routes>
  );
};

export default Router;
