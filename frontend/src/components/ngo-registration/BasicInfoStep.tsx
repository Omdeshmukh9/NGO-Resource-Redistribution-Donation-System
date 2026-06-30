import type { ChangeEvent } from "react";

export type BasicInfoData = {
  ngoName: string;
  registrationNumber: string;
  email: string;
  contactNumber: string;
  ngoType: string;
  address: string;
};

type BasicInfoStepProps = {
  data: BasicInfoData;
  onChange: (data: BasicInfoData) => void;
};

export default function BasicInfoStep({ data, onChange }: BasicInfoStepProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
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
        {/* NGO Name */}

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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]"
          />
        </div>

        {/* Registration Number */}

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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]"
          />
        </div>

        {/* Email */}

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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Contact Number
          </label>

          <input
            type="tel"
            name="contactNumber"
            value={data.contactNumber}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]"
          />
        </div>
      </div>
    </div>
  );
}
