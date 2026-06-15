import { useEffect, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  CheckCircle,
  MapPin,
  Heart,
  BookOpen,
  Stethoscope,
  Droplets,
  Apple,
  Leaf,
  Home,
  GraduationCap,
  //   ArrowRight,
} from "lucide-react";

type NGO = {
  id: number;
  name: string;
  category: string;
  location: string;
  impact: string;
  campaigns: number;
  donors: number;
  raised: string;
  rating: number;
  since: number;
  verified: boolean;
  description: string;
  img: string;
  imgBg: string;
  imgColor: string;
};

const categories = [
  { label: "All", icon: Heart },
  { label: "Education", icon: BookOpen },
  { label: "Healthcare", icon: Stethoscope },
  { label: "Water", icon: Droplets },
  { label: "Food", icon: Apple },
  { label: "Environment", icon: Leaf },
  { label: "Housing", icon: Home },
  { label: "Scholarship", icon: GraduationCap },
];

const ngos: NGO[] = [
  {
    id: 1,
    name: "Bal Vikas Foundation",
    category: "Education",
    location: "Jaipur, Rajasthan",
    impact: "15,000+ children educated",
    campaigns: 8,
    donors: 2341,
    raised: "₹1.2Cr",
    rating: 4.9,
    since: 2018,
    verified: true,
    description:
      "Improving rural education access through schools, scholarships, and teacher training programs.",
    img: "BV",
    imgBg: "bg-blue-100",
    imgColor: "text-blue-700",
  },
  {
    id: 2,
    name: "Arogya Seva Trust",
    category: "Healthcare",
    location: "Mumbai, Maharashtra",
    impact: "50,000+ patients treated",
    campaigns: 12,
    donors: 5872,
    raised: "₹4.8Cr",
    rating: 4.8,
    since: 2014,
    verified: true,
    description:
      "Providing free healthcare, mobile clinics, and emergency medical support.",
    img: "AS",
    imgBg: "bg-pink-100",
    imgColor: "text-pink-700",
  },
  {
    id: 3,
    name: "Jal Jeevan Society",
    category: "Water",
    location: "Bhubaneswar, Odisha",
    impact: "200+ villages served",
    campaigns: 5,
    donors: 1204,
    raised: "₹72L",
    rating: 4.7,
    since: 2019,
    verified: true,
    description: "Clean water systems and rainwater harvesting in rural India.",
    img: "JJ",
    imgBg: "bg-cyan-100",
    imgColor: "text-cyan-700",
  },
  {
    id: 4,
    name: "Anna Daan Mission",
    category: "Food",
    location: "Chennai, Tamil Nadu",
    impact: "2M+ meals served",
    campaigns: 10,
    donors: 8903,
    raised: "₹3.5Cr",
    rating: 4.9,
    since: 2012,
    verified: true,
    description: "Daily meals for homeless and migrant workers across cities.",
    img: "AD",
    imgBg: "bg-yellow-100",
    imgColor: "text-yellow-700",
  },
  {
    id: 5,
    name: "Vriksha Mitra Foundation",
    category: "Environment",
    location: "Bengaluru, Karnataka",
    impact: "5M+ trees planted",
    campaigns: 7,
    donors: 3412,
    raised: "₹98L",
    rating: 4.6,
    since: 2016,
    verified: true,
    description: "Large-scale afforestation and climate restoration projects.",
    img: "VM",
    imgBg: "bg-green-100",
    imgColor: "text-green-700",
  },
  {
    id: 6,
    name: "Swasth Bharat Initiative",
    category: "Healthcare",
    location: "Delhi, India",
    impact: "120+ health camps",
    campaigns: 9,
    donors: 4102,
    raised: "₹2.9Cr",
    rating: 4.5,
    since: 2017,
    verified: true,
    description: "Preventive healthcare awareness programs.",
    img: "SB",
    imgBg: "bg-red-100",
    imgColor: "text-red-700",
  },
  {
    id: 7,
    name: "Shiksha Udaan Trust",
    category: "Education",
    location: "Lucknow, UP",
    impact: "25,000+ students supported",
    campaigns: 11,
    donors: 3221,
    raised: "₹1.8Cr",
    rating: 4.7,
    since: 2015,
    verified: true,
    description: "Scholarships and digital learning initiatives.",
    img: "SU",
    imgBg: "bg-indigo-100",
    imgColor: "text-indigo-700",
  },
  {
    id: 8,
    name: "Hope Housing Foundation",
    category: "Housing",
    location: "Pune, Maharashtra",
    impact: "3,000+ homes built",
    campaigns: 6,
    donors: 2100,
    raised: "₹5.2Cr",
    rating: 4.6,
    since: 2013,
    verified: true,
    description: "Affordable housing for low-income families.",
    img: "HH",
    imgBg: "bg-purple-100",
    imgColor: "text-purple-700",
  },
  {
    id: 9,
    name: "Rahat Relief Network",
    category: "Disaster Relief",
    location: "Ahmedabad, Gujarat",
    impact: "100+ disaster responses",
    campaigns: 14,
    donors: 7600,
    raised: "₹6.1Cr",
    rating: 4.8,
    since: 2011,
    verified: true,
    description: "Emergency response for disasters.",
    img: "RR",
    imgBg: "bg-orange-100",
    imgColor: "text-orange-700",
  },
  {
    id: 10,
    name: "Nari Shakti Foundation",
    category: "Scholarship",
    location: "Bhopal, MP",
    impact: "18,000+ women trained",
    campaigns: 8,
    donors: 2900,
    raised: "₹1.5Cr",
    rating: 4.8,
    since: 2016,
    verified: true,
    description: "Women empowerment and skill training.",
    img: "NS",
    imgBg: "bg-rose-100",
    imgColor: "text-rose-700",
  },
];

export default function ExploreNGOs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("impact");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const esc = (e: KeyboardEvent) =>
      e.key === "Escape" && setShowFilters(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const filtered = useMemo(() => {
    return ngos
      .filter((n) => {
        const matchSearch =
          n.name.toLowerCase().includes(search.toLowerCase()) ||
          n.location.toLowerCase().includes(search.toLowerCase());

        const matchCat =
          activeCategory === "All" || n.category === activeCategory;

        const matchVerified = onlyVerified ? n.verified : true;
        const matchRating = n.rating >= minRating;

        return matchSearch && matchCat && matchVerified && matchRating;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "donors":
            return b.donors - a.donors;
          case "rating":
            return b.rating - a.rating;
          case "newest":
            return b.since - a.since;
          default:
            return b.campaigns - a.campaigns;
        }
      });
  }, [search, activeCategory, onlyVerified, minRating, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAFBF8] p-4 md:p-6">
      {/* HEADER */}
      <h1 className="text-2xl font-bold">Explore NGOs</h1>
      <p className="text-sm text-gray-500 mb-4">
        Discover verified NGOs making impact
      </p>

      {/* SEARCH + CONTROLS */}
      <div className="flex gap-3 flex-wrap mb-4">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm"
            placeholder="Search NGOs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          onClick={() => setShowFilters(true)}
          className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        <div className="flex border rounded-lg overflow-hidden">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-2 text-sm ${
              viewMode === "grid" ? "bg-green-600 text-white" : "bg-white"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-2 text-sm ${
              viewMode === "list" ? "bg-green-600 text-white" : "bg-white"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* FILTER MODAL (FIXED UX) */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/30 flex justify-center items-start pt-24 z-50"
          onClick={() => setShowFilters(false)}
        >
          <div className="w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white border rounded-2xl shadow-lg p-5 space-y-6">
              {/* HEADER */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">Filters</h3>

                <button
                  onClick={() => setShowFilters(false)}
                  className="text-xs px-2 py-1 hover:bg-gray-100 rounded"
                >
                  ✕ Close
                </button>
              </div>

              {/* VERIFIED */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Verified NGOs only</p>
                  <p className="text-xs text-gray-500">
                    Show only trusted NGOs
                  </p>
                </div>

                <button
                  onClick={() => setOnlyVerified(!onlyVerified)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 ${
                    onlyVerified ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition ${
                      onlyVerified ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>

              {/* RATING */}
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium">Minimum Rating</p>
                  <span className="text-xs text-gray-500">
                    {minRating.toFixed(1)}+
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="w-full accent-green-600"
                />
              </div>

              {/* SORT */}
              <div>
                <p className="text-sm font-medium mb-2">Sort By</p>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: "impact", label: "Impact" },
                    { key: "donors", label: "Donors" },
                    { key: "newest", label: "Newest" },
                    { key: "rating", label: "Rating" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSortBy(opt.key)}
                      className={`text-xs px-3 py-2 rounded-xl border ${
                        sortBy === opt.key ? "bg-green-600 text-white" : ""
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* RESET */}
              <button
                onClick={() => {
                  setOnlyVerified(false);
                  setMinRating(0);
                  setSortBy("impact");
                }}
                className="text-sm text-red-500"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CATEGORY */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.label}
              onClick={() => setActiveCategory(c.label)}
              className={`px-3 py-1 text-xs border rounded-full ${
                activeCategory === c.label
                  ? "bg-green-600 text-white"
                  : "bg-white"
              }`}
            >
              <Icon className="w-3 h-3 inline mr-1" />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* GRID / LIST */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "space-y-3"
        }
      >
        {filtered.map((ngo) => (
          <div
            key={ngo.id}
            className="bg-white rounded-2xl border shadow-sm p-5"
          >
            <div className="flex justify-between">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded ${ngo.imgBg} ${ngo.imgColor}`}
              >
                {ngo.img}
              </div>

              {ngo.verified && (
                <CheckCircle className="text-green-600 w-4 h-4" />
              )}
            </div>

            <h2 className="font-semibold mt-2">{ngo.name}</h2>

            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {ngo.location}
            </p>

            <p className="text-xs mt-2 text-gray-600">{ngo.description}</p>

            <div className="mt-3 text-xs font-medium text-green-700">
              {ngo.impact}
            </div>

            <div className="flex justify-between text-xs mt-3 text-gray-500">
              <span>{ngo.campaigns} campaigns</span>
              <span>{ngo.raised}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center mt-10 text-gray-500">No NGOs found</div>
      )}
    </div>
  );
}
