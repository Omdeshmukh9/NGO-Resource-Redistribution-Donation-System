import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Heart, Eye, EyeOff, ArrowRight } from "lucide-react";

import { MOCK_USERS } from "../../constants/mockUsers";
import { ROLES } from "../../constants/roles";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      alert("Invalid Credentials");
      return;
    }

    login({
      email: user.email,
      role: user.role,
    });

    switch (user.role) {
      case ROLES.ADMIN:
        navigate("/admin/dashboard");
        break;
      case ROLES.NGO:
        navigate("/ngo/dashboard");
        break;
      case ROLES.DONOR:
        navigate("/donor/dashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FAFBF8] font-[Inter]">
      {/* LEFT PANEL (same vibe as your Figma login page) */}
      <div className="hidden lg:flex lg:w-[50%] bg-[#2F6B3D] text-white flex-col justify-center p-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-[400px] h-[400px] border border-white rounded-full absolute top-10 left-10" />
          <div className="w-[300px] h-[300px] border border-white rounded-full absolute bottom-10 right-10" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-10">
            <Heart className="w-6 h-6" fill="white" />
            <h1 className="text-xl font-semibold">DonnerConnect</h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight mb-4">
            Welcome back <br /> to impact.
          </h2>

          <p className="text-[#bfe6cc] text-sm leading-relaxed mb-10">
            Connect, donate, and track real-world impact across verified NGOs.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "NGOs", value: "620+" },
              { label: "Donors", value: "1.2L+" },
              { label: "Impact", value: "₹58Cr+" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 p-3 rounded-xl">
                <div className="font-bold">{s.value}</div>
                <div className="text-xs text-[#cfe9d6]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1a2e1d]">Sign in</h1>
            <p className="text-sm text-[#6b7c70]">
              Enter your credentials to continue
            </p>
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-[#1a2e1d]">
              Email
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#6b7c70]" />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-[#1a2e1d]">
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-[#6b7c70]" />

              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-[#6b7c70]"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#2F6B3D] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#245a32] transition"
          >
            Sign in <ArrowRight className="w-4 h-4" />
          </button>

          {/* FOOTER */}
          <p className="text-center text-xs text-[#6b7c70] mt-6">
            Demo login using MOCK_USERS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
