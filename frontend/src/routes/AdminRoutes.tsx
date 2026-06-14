import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

const AdminRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.ADMIN}>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ProtectedRoute>
  );
};

export default AdminRoutes;
