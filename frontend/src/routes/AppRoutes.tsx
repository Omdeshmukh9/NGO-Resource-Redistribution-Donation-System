import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/public/Login";

import AdminRoutes from "./AdminRoutes";
import NgoRoutes from "./NgoRoutes";
import DonorRoutes from "./DonorRoutes";
import Register from "../pages/public/Register";
import NgoRegistration from "../pages/public/NgoRegistration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/register/ngo" element={<NgoRegistration />} />

      <Route path="/admin/*" element={<AdminRoutes />} />

      <Route path="/ngo/*" element={<NgoRoutes />} />

      <Route path="/donor/*" element={<DonorRoutes />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
