import type { ChangeEvent } from "react";

export type BasicInfoData = {
  ngoName: string;
  registrationNumber: string;
  email: string;
  contactNumber: string;
};

type Props = {
  data: BasicInfoData;
  onChange: (data: BasicInfoData) => void;
  errors: Record<string, string>;
};

export default function BasicInfoStep({ data, onChange, errors }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A2E1D]">Basic Information</h2>

        <p className="text-gray-500 mt-2">
          Tell us about your NGO. This information will be used during
          verification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NGO NAME */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            NGO Name
          </label>

          <input
            type="text"
            name="ngoName"
            value={data.ngoName}
            onChange={handleChange}
            placeholder="Helping Hands Foundation"
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${errors.ngoName ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.ngoName && (
            <p className="text-red-500 text-sm mt-1">{errors.ngoName}</p>
          )}
        </div>

        {/* REGISTRATION NUMBER */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Registration Number
          </label>

          <input
            type="text"
            name="registrationNumber"
            value={data.registrationNumber}
            onChange={handleChange}
            placeholder="REG123456789"
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${
                errors.registrationNumber ? "border-red-500" : "border-gray-300"
              }`}
          />

          {errors.registrationNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.registrationNumber}
            </p>
          )}
        </div>

        {/* EMAIL */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            NGO Email
          </label>

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="contact@ngo.org"
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* CONTACT NUMBER */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Contact Number
          </label>

          <input
            type="tel"
            name="contactNumber"
            value={data.contactNumber}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${errors.contactNumber ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>
      </div>
    </div>
  );
}
