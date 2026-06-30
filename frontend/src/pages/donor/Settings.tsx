import { useState } from "react";
import { User, Bell, Shield, Moon, LogOut, Trash2 } from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1a2e1d]">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account and preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-[#2F6B3D]" />
          <h2 className="font-semibold">Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border border-black/5 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
            placeholder="Full Name"
            defaultValue="Rahul Agarwal"
          />

          <input
            className="border border-black/5 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
            placeholder="Email"
            defaultValue="rahul@email.com"
          />
        </div>

        <button className="mt-4 bg-[#2F6B3D] text-white px-4 py-2 rounded-xl text-sm">
          Save Changes
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-[#2F6B3D]" />
          <h2 className="font-semibold">Notifications</h2>
        </div>

        <div className="space-y-4 text-sm">
          <label className="flex items-center justify-between">
            <span>Push Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </label>

          <label className="flex items-center justify-between">
            <span>Email Updates</span>
            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={() => setEmailUpdates(!emailUpdates)}
            />
          </label>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Moon className="text-[#2F6B3D]" />
          <h2 className="font-semibold">Preferences</h2>
        </div>

        <label className="flex items-center justify-between text-sm">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </label>
      </div>

      {/* Security */}
      <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="text-[#2F6B3D]" />
          <h2 className="font-semibold">Security</h2>
        </div>

        <button className="text-sm text-[#2F6B3D] font-medium">
          Change Password
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border border-red-100 rounded-2xl p-5 shadow-sm">
        <h2 className="font-semibold text-red-600 mb-4">Danger Zone</h2>

        <div className="space-y-3">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
            <LogOut size={16} />
            Logout
          </button>

          <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
            <Trash2 size={16} />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
