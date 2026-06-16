import { useState } from "react";
import { Heart, Search, Trash2, Clock } from "lucide-react";

const savedCampaignsData = [
  {
    id: 1,
    title: "Flood Relief — Assam Disaster Response",
    ngo: "Disaster Aid India",
    category: "Emergency",
    urgency: "High",
    raised: 340000,
    goal: 500000,
    daysLeft: 7,
  },
  {
    id: 2,
    title: "Digital Lab for Government Schools",
    ngo: "TechBridge India",
    category: "Education",
    urgency: "Medium",
    raised: 125000,
    goal: 400000,
    daysLeft: 24,
  },
  {
    id: 3,
    title: "Nutrition Program for Pregnant Women",
    ngo: "Poshan Shakti NGO",
    category: "Health",
    urgency: "Medium",
    raised: 67000,
    goal: 200000,
    daysLeft: 38,
  },
];

export default function SavedCampaigns() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState(savedCampaignsData);

  const filtered = saved.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.ngo.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || c.category === filter;

    return matchesSearch && matchesFilter;
  });

  const removeSaved = (id: number) => {
    setSaved((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1a2e1d]">Saved Campaigns</h1>
        <p className="text-sm text-gray-500 mt-1">
          Campaigns you bookmarked for later support.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search campaigns..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-black/5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 rounded-xl border border-black/5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2F6B3D]/20"
        >
          <option value="All">All Categories</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Emergency">Emergency</option>
        </select>
      </div>

      {/* Campaign Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <Heart className="mx-auto mb-3" />
          No saved campaigns found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((c) => {
            const progress = Math.round((c.raised / c.goal) * 100);

            return (
              <div
                key={c.id}
                className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                {/* Top */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#1a2e1d]">{c.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{c.ngo}</p>
                  </div>

                  <button
                    onClick={() => removeSaved(c.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                  <span className="px-2 py-1 bg-[#EAF4EC] text-[#2F6B3D] rounded-full">
                    {c.category}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {c.daysLeft} days left
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="h-2 bg-[#EAF4EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2F6B3D]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-xs mt-2 text-gray-600">
                    <span>{progress}% funded</span>
                    <span>₹{c.raised.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-4 w-full bg-[#2F6B3D] text-white py-2 rounded-xl text-sm hover:opacity-90">
                  Donate Now
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
