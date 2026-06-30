import { ChangeEvent } from "react";

export type ProfileData = {
  description: string;
  vision: string;
  ngoType: string;
  logo: File | null;
  coverImage: File | null;
  profileImage: File | null;
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
  errors: Record<string, string>;
};

export default function ProfileStep({ data, onChange, errors }: Props) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    onChange({ ...data, [name]: files?.[0] ?? null });
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toString();
        const lng = pos.coords.longitude.toString();

        onChange({
          ...data,
          latitude: lat,
          longitude: lng,
        });
      },
      (err) => {
        console.error(err);
        alert("Failed to fetch location");
      },
    );
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
        {/* NGO TYPE */}
        <div>
          <label className="block text-sm font-medium mb-2">NGO Type</label>
          <select
            name="ngoType"
            value={data.ngoType}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D] outline-none
${errors.ngoType ? "border-red-500" : "border-gray-300"}`}
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
          {errors.ngoType && (
            <p className="text-red-500 text-sm mt-1">{errors.ngoType}</p>
          )}
        </div>

        {/* VISION */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Vision Statement
          </label>
          <textarea
            rows={2}
            name="vision"
            value={data.vision}
            onChange={handleChange}
            className={`w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
${errors.vision ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.vision && (
            <p className="text-red-500 text-sm mt-1">{errors.vision}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            rows={5}
            name="description"
            value={data.description}
            onChange={handleChange}
            className={`w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-[#2F6B3D]
${errors.description ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* FILES */}
        <div>
          <label className="block text-sm font-medium mb-2">NGO Logo</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#2F6B3D] file:px-4 file:py-3 file:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#2F6B3D] file:px-4 file:py-3 file:text-white"
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
            onChange={handleFileChange}
            className="w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#2F6B3D] file:px-4 file:py-3 file:text-white"
          />
        </div>

        {/* ADDRESS */}
        <div className="md:col-span-2 mt-2">
          <h3 className="text-lg font-semibold text-[#2F6B3D]">Address</h3>
        </div>

        <input
          name="addressLine1"
          value={data.addressLine1}
          onChange={handleChange}
          placeholder="Address Line 1"
          className={`md:col-span-2 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#2F6B3D]
${errors.addressLine1 ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.addressLine1 && (
          <p className="text-red-500 text-sm">{errors.addressLine1}</p>
        )}

        <input
          name="addressLine2"
          value={data.addressLine2}
          onChange={handleChange}
          placeholder="Address Line 2"
          className="md:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3"
        />

        <input
          name="city"
          value={data.city}
          onChange={handleChange}
          placeholder="City"
          className={`w-full rounded-xl border px-4 py-3 ${errors.city ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

        <input
          name="state"
          value={data.state}
          onChange={handleChange}
          placeholder="State"
          className={`w-full rounded-xl border px-4 py-3 ${errors.state ? "border-red-500" : "border-gray-300"}`}
        />

        <input
          name="country"
          value={data.country}
          onChange={handleChange}
          placeholder="Country"
          className={`w-full rounded-xl border px-4 py-3 ${errors.country ? "border-red-500" : "border-gray-300"}`}
        />

        <input
          name="pincode"
          value={data.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          maxLength={6}
          className={`w-full rounded-xl border px-4 py-3 ${errors.pincode ? "border-red-500" : "border-gray-300"}`}
        />

        {/* GPS */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            onClick={getCurrentLocation}
            className="px-5 py-3 rounded-xl bg-[#2F6B3D] text-white hover:bg-[#245731]"
          >
            Use Current Location
          </button>
        </div>

        {/* LAT */}
        <input
          name="latitude"
          value={data.latitude}
          onChange={handleChange}
          placeholder="Latitude"
          className={`w-full rounded-xl border px-4 py-3 ${errors.latitude ? "border-red-500" : "border-gray-300"}`}
        />

        {/* LNG */}
        <input
          name="longitude"
          value={data.longitude}
          onChange={handleChange}
          placeholder="Longitude"
          className={`w-full rounded-xl border px-4 py-3 ${errors.longitude ? "border-red-500" : "border-gray-300"}`}
        />
      </div>
    </div>
  );
}
