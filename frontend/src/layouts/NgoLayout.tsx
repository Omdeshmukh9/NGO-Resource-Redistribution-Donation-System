import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const NgoLayout = () => {
  const { logout, user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>NGO Layout</h2>

      <p>{user?.email}</p>

      <button onClick={handleLogout}>Logout</button>

      <hr />

      <Outlet />
    </div>
  );
};

export default NgoLayout;
