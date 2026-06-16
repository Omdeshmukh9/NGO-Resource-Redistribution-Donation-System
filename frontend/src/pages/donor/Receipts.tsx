import { useState } from "react";
import { Search, Download, CheckCircle, FileText } from "lucide-react";

const receiptsData = [
  {
    id: 1,
    campaign: "Educate 500 Rural Children",
    ngo: "Bal Vikas Foundation",
    amount: 2500,
    date: "08 Jun 2026",
    status: "Completed",
  },
  {
    id: 2,
    campaign: "Flood Relief Assam",
    ngo: "Disaster Aid India",
    amount: 5000,
    date: "01 Jun 2026",
    status: "Completed",
  },
  {
    id: 3,
    campaign: "Clean Water Project",
    ngo: "Jal Jeevan Society",
    amount: 1000,
    date: "24 May 2026",
    status: "Completed",
  },
  {
    id: 4,
    campaign: "Nutrition Program",
    ngo: "Poshan Shakti NGO",
    amount: 3000,
    date: "15 May 2026",
    status: "Completed",
  },
];

export default function Receipts() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = receiptsData.filter((r) => {
    const matchesSearch =
      r.campaign.toLowerCase().includes(search.toLowerCase()) ||
      r.ngo.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || r.status === filter;

    return matchesSearch && matchesFilter;
  });

  const handleDownload = (id: number) => {
    // mock download logic
    alert(`Downloading receipt #${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1a2e1d]">Donation Receipts</h1>
        <p className="text-sm text-gray-500 mt-1">
          Access and download your donation records.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search receipts..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-black/5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 rounded-xl border border-black/5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Receipt List */}
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-black/5 flex items-center gap-2">
          <FileText size={18} />
          <h2 className="font-semibold">Your Receipts</h2>
        </div>

        <div className="divide-y divide-black/5">
          {filtered.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              No receipts found.
            </div>
          ) : (
            filtered.map((r) => (
              <div
                key={r.id}
                className="p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:bg-[#FAFBF8] transition"
              >
                {/* Left */}
                <div>
                  <h3 className="font-medium text-[#1a2e1d]">{r.campaign}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {r.ngo} • {r.date}
                  </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-semibold">
                      ₹{r.amount.toLocaleString()}
                    </div>

                    <div className="flex items-center justify-end gap-1 text-xs text-green-600">
                      <CheckCircle size={12} />
                      {r.status}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(r.id)}
                    className="bg-[#EAF4EC] text-[#2F6B3D] p-2 rounded-lg hover:bg-[#dff0e3]"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
