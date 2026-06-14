import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/donor/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

const DonorRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.DONOR}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </ProtectedRoute>
  );
};

export default DonorRoutes;
