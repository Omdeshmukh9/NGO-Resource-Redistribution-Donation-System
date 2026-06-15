import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/donor/Dashboard";
import DonorLayout from "../layouts/DonorLayout";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

const DonorRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.DONOR}>
      <Routes>
        <Route element={<DonorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ProtectedRoute>
  );
};

export default DonorRoutes;
