import { useState } from "react";
import { CheckCircle, Search, Download } from "lucide-react";

const initialDonations = [
  {
    id: 1,
    campaign: "Educate 500 Rural Children in Rajasthan",
    ngo: "Bal Vikas Foundation",
    amount: 2500,
    date: "08 Jun 2026",
    status: "Completed",
    category: "Education",
  },
  {
    id: 2,
    campaign: "Mobile Medical Units for Tribal Communities",
    ngo: "Arogya Seva Trust",
    amount: 5000,
    date: "01 Jun 2026",
    status: "Completed",
    category: "Healthcare",
  },
  {
    id: 3,
    campaign: "Clean Water for 10 Villages in Odisha",
    ngo: "Jal Jeevan Society",
    amount: 1000,
    date: "24 May 2026",
    status: "Completed",
    category: "Water",
  },
  {
    id: 4,
    campaign: "Hunger-Free Hyderabad — 1000 Meals Daily",
    ngo: "Anna Daan Sangha",
    amount: 3000,
    date: "15 May 2026",
    status: "Completed",
    category: "Food",
  },
  {
    id: 5,
    campaign: "Scholarship Fund for Meritorious Students",
    ngo: "Vidya Prakashan Trust",
    amount: 10000,
    date: "03 May 2026",
    status: "Completed",
    category: "Education",
  },
];
type Donation = {
  id: number;
  campaign: string;
  ngo: string;
  amount: number;
  date: string;
  status: string;
  category: string;
};

export default function MyDonations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const categories = ["All", "Education", "Healthcare", "Water", "Food"];
  const statuses = ["All", "Completed", "Pending", "Failed"];

  const filtered = initialDonations.filter((d) => {
    const q = search.toLowerCase().trim();

    const matchSearch =
      d.campaign.toLowerCase().includes(q) || d.ngo.toLowerCase().includes(q);

    const matchCategory = category === "All" || d.category === category;

    const matchStatus = status === "All" || d.status === status;

    return matchSearch && matchCategory && matchStatus;
  });

  const downloadReceipt = (donation: Donation) => {
    const content = `
DONATION RECEIPT

Campaign: ${donation.campaign}
NGO: ${donation.ngo}
Amount: ₹${donation.amount}
Date: ${donation.date}
Status: ${donation.status}

Thank you for your contribution ❤️
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${donation.id}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1a2e1d]">My Donations</h1>
        <p className="text-sm text-[#6b7c70] mt-1">
          Track all your contributions in one place.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        {/* Search (unchanged logic, only nicer wrapper) */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7c70]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search donations..."
            className="pl-9 pr-4 py-2 bg-[#f4f6f2] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20 w-72"
          />
        </div>

        {/* Filter Pills Container */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none bg-white border border-black/10 shadow-sm rounded-xl px-4 py-2 pr-8 text-sm text-[#1a2e1d] focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20 hover:border-[#2F6B3D]/30 transition"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {/* dropdown arrow */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7c70]">
              ▼
            </div>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="appearance-none bg-white border border-black/10 shadow-sm rounded-xl px-4 py-2 pr-8 text-sm text-[#1a2e1d] focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20 hover:border-[#2F6B3D]/30 transition"
            >
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {/* dropdown arrow */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7c70]">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm divide-y divide-black/5">
        {filtered.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">No donations found.</div>
        ) : (
          filtered.map((d) => (
            <div
              key={d.id}
              className="p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
            >
              {/* Left */}
              <div>
                <h3 className="font-medium text-[#1a2e1d]">{d.campaign}</h3>
                <p className="text-sm text-[#6b7c70] mt-1">
                  {d.ngo} • {d.category}
                </p>
                <p className="text-xs text-[#6b7c70] mt-1">{d.date}</p>
              </div>

              {/* Right */}
              <div className="text-right flex items-center gap-3">
                <div>
                  <div className="font-semibold text-[#1a2e1d]">
                    ₹{d.amount.toLocaleString()}
                  </div>

                  <div className="flex items-center justify-end gap-1 text-xs text-green-600">
                    <CheckCircle size={12} />
                    {d.status}
                  </div>
                </div>

                {/* DOWNLOAD BUTTON */}
                <button
                  onClick={() => downloadReceipt(d)}
                  className="w-8 h-8 rounded-lg bg-[#f4f6f2] flex items-center justify-center hover:bg-[#EAF4EC] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#6b7c70]" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
