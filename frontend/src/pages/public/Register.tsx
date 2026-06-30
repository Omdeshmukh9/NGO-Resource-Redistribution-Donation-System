import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  HandHeart,
  Users,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, "Username must be at least 4 characters")
    .max(20)
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Only letters, numbers and underscores are allowed",
    ),

  phoneNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10 digit mobile number"),

  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "One uppercase letter required")
    .regex(/[a-z]/, "One lowercase letter required")
    .regex(/[0-9]/, "One number required")
    .regex(/[^A-Za-z0-9]/, "One special character required"),

  role: z.enum(["DONOR", "NGO"]),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "DONOR",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      /**
       * Backend Integration
       *
       * await axios.post(...)
       */

      const usernameTaken = false;
      const phoneTaken = false;

      if (usernameTaken) {
        alert("Username already exists");
        return;
      }

      if (phoneTaken) {
        alert("Phone number already registered");
        return;
      }

      alert("Account created successfully!");

      if (data.role === "NGO") {
        sessionStorage.setItem("pendingNgoRegistration", "true");

        navigate("/register/ngo");
      } else {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBF8] flex">
      {/* LEFT PANEL */}

      <div className="hidden lg:flex lg:w-1/2 bg-[#2F6B3D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -left-24 w-96 h-96 border border-white rounded-full" />

          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] border border-white rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-14 w-full">
          <div className="flex items-center gap-3 mb-10">
            <Heart className="w-8 h-8" fill="white" />

            <h1 className="text-2xl font-bold">DonorConnect</h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Start creating
            <br />
            impact today.
          </h2>

          <p className="mt-6 text-green-100 leading-relaxed">
            Whether you're donating or running an NGO, create your account and
            become part of India's transparent donation ecosystem.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              {
                icon: ShieldCheck,
                title: "Verified NGOs",
              },
              {
                icon: HandHeart,
                title: "Secure Donations",
              },
              {
                icon: Users,
                title: "Community",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <Icon className="w-7 h-7 mb-4" />

                  <div className="text-sm font-medium">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1A2E1D]">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">Join DonorConnect</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 space-y-5"
          >
            {/* Username */}

            <div>
              <label className="block text-sm font-medium text-[#1A2E1D] mb-2">
                Username
              </label>

              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                <input
                  {...register("username")}
                  placeholder="Enter Username"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D] focus:border-transparent"
                />
              </div>

              {errors.username && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Phone */}

            <div>
              <label className="block text-sm font-medium text-[#1A2E1D] mb-2">
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                <input
                  {...register("phoneNumber")}
                  placeholder="Enter Phone number"
                  maxLength={10}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D] focus:border-transparent"
                />
              </div>

              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <label className="block text-sm font-medium text-[#1A2E1D] mb-2">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D] focus:border-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

              <p className="mt-2 text-xs text-gray-500">
                Must contain 8+ characters, uppercase, lowercase, number and
                special character.
              </p>
            </div>

            {/* Role */}

            <div>
              <label className="block text-sm font-medium text-[#1A2E1D] mb-3">
                Register As
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    selectedRole === "DONOR"
                      ? "border-[#2F6B3D] bg-[#EAF4EC]"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    value="DONOR"
                    {...register("role")}
                    className="hidden"
                  />

                  <div className="font-semibold text-[#1A2E1D]">Donor</div>

                  <div className="text-sm text-gray-500 mt-1">
                    Donate to verified campaigns.
                  </div>
                </label>

                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    selectedRole === "NGO"
                      ? "border-[#2F6B3D] bg-[#EAF4EC]"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    value="NGO"
                    {...register("role")}
                    className="hidden"
                  />

                  <div className="font-semibold text-[#1A2E1D]">NGO</div>

                  <div className="text-sm text-gray-500 mt-1">
                    Register and create campaigns.
                  </div>
                </label>
              </div>
            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2F6B3D] hover:bg-[#245731] transition text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                "Creating Account..."
              ) : (
                <>
                  Create Account
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Login */}

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#2F6B3D] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
