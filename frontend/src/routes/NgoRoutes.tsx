import { Routes, Route, Navigate } from "react-router-dom";
import NgoLayout from "../layouts/NgoLayout";

import Dashboard from "../pages/ngo/Dashboard";
import Campaigns from "../pages/ngo/Campaigns";
import Requirements from "../pages/ngo/Requirements";
import Updates from "../pages/ngo/Updates";
import Documents from "../pages/ngo/Documents";
import Donors from "../pages/ngo/Donors";

export default function NgoRoutes() {
  return (
    <Routes>
      <Route element={<NgoLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="requirements" element={<Requirements />} />
        <Route path="updates" element={<Updates />} />
        <Route path="documents" element={<Documents />} />
        <Route path="donors" element={<Donors />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
}
