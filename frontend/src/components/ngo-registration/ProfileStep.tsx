import type { ChangeEvent } from "react";

export type ProfileData = {
  description: string;
  vision: string;
  ngoType: string;

  logoUrl: string;
  coverImageUrl: string;
  profileImageUrl: string;

  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  latitude: string;
  longitude: string;
};

type Props = {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
};

export default function ProfileStep({ data, onChange }: Props) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A2E1D]">NGO Profile</h2>

        <p className="text-gray-500 mt-2">
          Tell donors more about your organisation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NGO Type */}

        <div>
          <label className="block text-sm font-medium mb-2">NGO Type</label>

          <select
            name="ngoType"
            value={data.ngoType}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          >
            <option value="">Select NGO Type</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Environment</option>
            <option>Women Empowerment</option>
            <option>Animal Welfare</option>
            <option>Disaster Relief</option>
            <option>Food Distribution</option>
            <option>Other</option>
          </select>
        </div>

        {/* Vision Statement */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Vision Statement
          </label>

          <textarea
            rows={1}
            name="vision"
            value={data.vision}
            onChange={handleChange}
            placeholder="Describe your long-term vision..."
            className="w-full rounded-xl border border-gray-300 p-3 resize-none focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        {/* Description */}

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Description</label>

          <textarea
            rows={5}
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Tell donors what your NGO does..."
            className="w-full rounded-xl border border-gray-300 p-4 resize-none focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        {/* Images */}

        <div>
          <label className="block text-sm font-medium mb-2">NGO Logo</label>

          <input
            type="file"
            name="logo"
            accept="image/*"
            className="w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#2F6B3D] file:px-4 file:py-3 file:text-white hover:file:bg-[#245731]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cover Image</label>

          <input
            type="file"
            name="coverImage"
            accept="image/*"
            className="w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#2F6B3D] file:px-4 file:py-3 file:text-white hover:file:bg-[#245731]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Profile Image
          </label>

          <input
            type="file"
            name="profileImage"
            accept="image/*"
            className="w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#2F6B3D] file:px-4 file:py-3 file:text-white hover:file:bg-[#245731]"
          />
        </div>

        <div className="md:col-span-2 mt-2">
          <h3 className="text-lg font-semibold text-[#2F6B3D]">Address</h3>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Address Line 1
          </label>

          <input
            type="text"
            name="addressLine1"
            value={data.addressLine1}
            onChange={handleChange}
            placeholder="House No., Street Name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Address Line 2
          </label>

          <input
            type="text"
            name="addressLine2"
            value={data.addressLine2}
            onChange={handleChange}
            placeholder="Area / Landmark"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">City</label>

          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">State</label>

          <input
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Country</label>

          <input
            type="text"
            name="country"
            value={data.country}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Pincode</label>

          <input
            type="text"
            name="pincode"
            value={data.pincode}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Latitude</label>

          <input
            type="text"
            name="latitude"
            value={data.latitude}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Longitude</label>

          <input
            type="text"
            name="longitude"
            value={data.longitude}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none"
          />
        </div>
      </div>
    </div>
  );
}
