import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/public/Login";

import AdminDashboard from "../pages/admin/Dashboard";
import NgoDashboard from "../pages/ngo/Dashboard";
import DonorDashboard from "../pages/donor/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

import { ROLES } from "../constants/roles";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole={ROLES.ADMIN}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ngo/dashboard"
        element={
          <ProtectedRoute allowedRole={ROLES.NGO}>
            <NgoDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/donor/dashboard"
        element={
          <ProtectedRoute allowedRole={ROLES.DONOR}>
            <DonorDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
