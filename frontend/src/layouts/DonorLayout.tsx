import { useState } from "react";
import {
  LayoutDashboard,
  Compass,
  Heart,
  Bookmark,
  Receipt,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menuItems = [
  {
    label: "Dashboard",
    path: "/donor/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Explore",
    path: "/donor/explore",
    icon: Compass,
  },
  {
    label: "My Donations",
    path: "/donor/donations",
    icon: Heart,
  },
  {
    label: "Saved Campaigns",
    path: "/donor/saved",
    icon: Bookmark,
  },
  {
    label: "Receipts",
    path: "/donor/receipts",
    icon: Receipt,
  },
  {
    label: "Settings",
    path: "/donor/settings",
    icon: Settings,
  },
];

export default function DonorLayout() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FAFBF8] flex">
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen bg-white border-r border-black/5
          transition-all duration-300

          ${collapsed ? "w-20" : "w-64"}

          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Logo */}

        <div className="h-16 flex items-center justify-between px-4 border-b border-black/5">
          {!collapsed && (
            <h1 className="font-bold text-[#2F6B3D] text-lg">DonorConnect</h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-2 rounded-lg hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        {/* User */}

        <div className="p-4 border-b border-black/5">
          {!collapsed ? (
            <>
              <p className="font-medium">{user?.email}</p>

              <p className="text-xs text-gray-500">Donor</p>
            </>
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#EAF4EC] flex items-center justify-center font-semibold text-[#2F6B3D]">
              D
            </div>
          )}
        </div>

        {/* Navigation */}

        <nav className="p-3 flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                    flex items-center gap-3
                    px-3 py-3 rounded-xl
                    transition-all

                    ${
                      isActive
                        ? "bg-[#EAF4EC] text-[#2F6B3D]"
                        : "hover:bg-gray-100"
                    }
                  `
                }
              >
                <Icon size={18} />

                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}

        <div className="absolute bottom-4 left-0 w-full px-3">
          <button
            onClick={handleLogout}
            className="
              w-full
              flex items-center gap-3
              px-3 py-3
              rounded-xl
              text-red-600
              hover:bg-red-50
            "
          >
            <LogOut size={18} />

            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Area */}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}

        <header className="h-16 bg-white border-b border-black/5 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden">
              <Menu size={22} />
            </button>

            <h2 className="font-semibold text-lg">Donor Portal</h2>
          </div>

          <div className="text-sm text-gray-500">{user?.email}</div>
        </header>

        {/* Page Content */}

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
