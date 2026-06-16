import { CheckCircle, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Donated",
    value: "₹21,500",
    subtitle: "This year",
  },
  {
    title: "Campaigns Supported",
    value: "12",
    subtitle: "All time",
  },
  {
    title: "NGOs Supported",
    value: "7",
    subtitle: "Verified NGOs",
  },
  {
    title: "Impact Reached",
    value: "4,800+",
    subtitle: "Estimated lives",
  },
];

const campaigns = [
  {
    id: 1,
    title: "Educate 500 Rural Children",
    ngo: "Bal Vikas Foundation",
    raised: 185000,
    goal: 300000,
    daysLeft: 18,
  },
  {
    id: 2,
    title: "Flood Relief Assam",
    ngo: "Disaster Aid India",
    raised: 340000,
    goal: 500000,
    daysLeft: 7,
  },
  {
    id: 3,
    title: "Nutrition Program",
    ngo: "Poshan Shakti NGO",
    raised: 67000,
    goal: 200000,
    daysLeft: 35,
  },
];

const donations = [
  {
    id: 1,
    campaign: "Educate 500 Rural Children",
    amount: "₹2,500",
    date: "08 Jun 2026",
  },
  {
    id: 2,
    campaign: "Flood Relief Assam",
    amount: "₹5,000",
    date: "01 Jun 2026",
  },
  {
    id: 3,
    campaign: "Clean Water Project",
    amount: "₹1,000",
    date: "24 May 2026",
  },
];

const updates = [
  {
    id: 1,
    ngo: "Bal Vikas Foundation",
    text: "200 children enrolled this month.",
  },
  {
    id: 2,
    ngo: "Jal Jeevan Society",
    text: "Village #7 water installation completed.",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6  bg-[#FAFBF8] min-h-full">
      {/* Header */}
      <div>
        <h1 className="font-bold text-2xl text-[#1a2e1d]">Donor Dashboard</h1>
        <p className="text-[#6b7c70] text-sm mt-1">
          Track your donations and impact.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-5 border border-black/[0.06] shadow-sm"
          >
            <p className="text-xs text-[#6b7c70]">{item.title}</p>
            <h3 className="text-2xl font-bold text-[#1a2e1d] mt-2">
              {item.value}
            </h3>
            <p className="text-xs text-[#2F6B3D] mt-1 font-medium">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campaigns */}
          <div className="bg-white rounded-2xl shadow-sm border border-black/[0.06]">
            <div className="p-5 border-b border-black/[0.06]">
              <h2 className="font-semibold text-[#1a2e1d]">
                Recommended Campaigns
              </h2>
            </div>

            <div className="divide-y divide-black/[0.04]">
              {campaigns.map((c) => {
                const progress = Math.round((c.raised / c.goal) * 100);

                return (
                  <div key={c.id} className="p-5">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-medium text-[#1a2e1d]">
                          {c.title}
                        </h3>
                        <p className="text-sm text-[#6b7c70] mt-1">{c.ngo}</p>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-[#6b7c70]">
                        <Clock size={12} />
                        {c.daysLeft} days left
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-4">
                      <div className="h-2 rounded-full bg-[#EAF4EC] overflow-hidden">
                        <div
                          className="h-full bg-[#2F6B3D]"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <div className="flex justify-between mt-2 text-sm text-[#6b7c70]">
                        <span>₹{c.raised.toLocaleString()}</span>
                        <span>{progress}%</span>
                      </div>
                    </div>

                    <button className="mt-4 bg-[#2F6B3D] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#275c34]">
                      Donate Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donations */}
          <div className="bg-white rounded-2xl shadow-sm border border-black/[0.06]">
            <div className="p-5 border-b border-black/[0.06]">
              <h2 className="font-semibold text-[#1a2e1d]">Recent Donations</h2>
            </div>

            <div className="divide-y divide-black/[0.04]">
              {donations.map((d) => (
                <div
                  key={d.id}
                  className="p-5 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-medium text-[#1a2e1d]">{d.campaign}</h4>
                    <p className="text-sm text-[#6b7c70]">{d.date}</p>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-[#1a2e1d]">
                      {d.amount}
                    </div>

                    <div className="flex items-center justify-end gap-1 text-xs text-green-600">
                      <CheckCircle size={12} />
                      Completed
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Updates */}
          <div className="bg-white rounded-2xl shadow-sm border border-black/[0.06]">
            <div className="p-5 border-b border-black/[0.06]">
              <h2 className="font-semibold text-[#1a2e1d]">NGO Updates</h2>
            </div>

            <div className="divide-y divide-black/[0.04]">
              {updates.map((u) => (
                <div key={u.id} className="p-5">
                  <h4 className="font-medium text-[#1a2e1d]">{u.ngo}</h4>
                  <p className="text-sm text-[#6b7c70] mt-2">{u.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#2F6B3D] text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Make a Difference Today</h3>

            <p className="text-sm text-[#a8d4b4] mt-2">
              Explore verified campaigns and support meaningful causes.
            </p>

            <button className="mt-4 w-full bg-white text-[#2F6B3D] py-2 rounded-lg font-medium">
              Explore Campaigns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
