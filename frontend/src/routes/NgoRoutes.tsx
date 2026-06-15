import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/ngo/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import NgoLayout from "../layouts/NgoLayout";
import { ROLES } from "../constants/roles";

const NgoRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.NGO}>
      <Routes>
        <Route element={<NgoLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ProtectedRoute>
  );
};

export default NgoRoutes;
