import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Heart,
  LayoutDashboard,
  Megaphone,
  Package,
  BarChart3,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  PlusCircle,
  Bell,
  CheckCircle,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/ngo/dashboard" },
  { icon: Megaphone, label: "Campaigns", path: "/ngo/campaigns" },
  { icon: Package, label: "Requirements", path: "/ngo/requirements" },
  { icon: BarChart3, label: "Impact Updates", path: "/ngo/updates" },
  { icon: FileText, label: "Documents", path: "/ngo/documents" },
  { icon: Users, label: "Donors", path: "/ngo/donors" },
];

export default function NgoLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#FAFBF8] overflow-hidden">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r border-black/[0.06]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-5 border-b border-black/[0.06] flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#2F6B3D] flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#1a2e1d]">DonorConnect</span>

          <button className="ml-auto md:hidden" onClick={() => setOpen(false)}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* NGO Info */}
        <div className="p-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EAF4EC] flex items-center justify-center font-bold text-[#2F6B3D]">
              BV
            </div>
            <div>
              <div className="text-sm font-medium text-[#1a2e1d]">
                Bal Vikas Foundation
              </div>
              <div className="flex items-center gap-1 text-xs text-[#2F6B3D]">
                <CheckCircle className="w-3 h-3" />
                Verified NGO
              </div>
            </div>
          </div>
        </div>

        {/* NAV ITEMS */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition
                  ${
                    active
                      ? "bg-[#EAF4EC] text-[#2F6B3D]"
                      : "text-[#6b7c70] hover:bg-[#f4f6f2]"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="p-3 border-t border-black/[0.06] space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#6b7c70] hover:bg-[#f4f6f2]">
            <Settings className="w-4 h-4" />
            Settings
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP NAVBAR */}
        <header className="h-14 bg-white border-b border-black/[0.06] flex items-center justify-between px-4">
          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="w-5 h-5 text-gray-700" />
          </button>

          <div className="font-semibold text-[#1a2e1d]">NGO Dashboard</div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 bg-[#2F6B3D] text-white text-sm px-3 py-2 rounded-lg">
              <PlusCircle className="w-4 h-4" />
              New Campaign
            </button>

            <button className="relative w-9 h-9 rounded-xl bg-[#f4f6f2] flex items-center justify-center">
              <Bell className="w-4 h-4 text-gray-600" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* PAGE CONTENT (FIX IS HERE) */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
