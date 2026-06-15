import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/donor/Dashboard";
import Explore from "../pages/donor/Explore";
import DonationHistory from "../pages/donor/DonationHistory";
import SavedCampaigns from "../pages/donor/SavedCampaigns";
import Receipts from "../pages/donor/Receipts";
import Settings from "../pages/donor/Settings";

import DonorLayout from "../layouts/DonorLayout";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

const DonorRoutes = () => {
  return (
    <ProtectedRoute allowedRole={ROLES.DONOR}>
      <Routes>
        <Route element={<DonorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="donations" element={<DonationHistory />} />
          <Route path="saved" element={<SavedCampaigns />} />
          <Route path="receipts" element={<Receipts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </ProtectedRoute>
  );
};

export default DonorRoutes;
