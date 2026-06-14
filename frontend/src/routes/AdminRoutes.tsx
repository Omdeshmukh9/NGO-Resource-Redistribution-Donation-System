import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

const AdminRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.ADMIN}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </ProtectedRoute>
  );
};

export default AdminRoutes;
