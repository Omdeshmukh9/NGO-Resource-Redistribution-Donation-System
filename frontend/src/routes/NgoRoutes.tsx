import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/ngo/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

const NgoRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.NGO}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </ProtectedRoute>
  );
};

export default NgoRoutes;
