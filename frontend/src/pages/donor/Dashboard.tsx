import { Heart, CheckCircle, Clock } from "lucide-react";

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
    <div className="space-y-6">
      {/* Page Header */}

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2e1d]">
          Donor Dashboard
        </h1>

        <p className="text-gray-500 mt-1">Track your donations and impact.</p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.title}</p>

            <h3 className="text-2xl font-bold mt-2">{item.value}</h3>

            <p className="text-xs text-[#2F6B3D] mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}

        <div className="lg:col-span-2 space-y-6">
          {/* Campaigns */}

          <div className="bg-white rounded-2xl border border-black/5 shadow-sm">
            <div className="p-5 border-b border-black/5">
              <h2 className="font-semibold">Recommended Campaigns</h2>
            </div>

            <div className="divide-y divide-black/5">
              {campaigns.map((campaign) => {
                const progress = Math.round(
                  (campaign.raised / campaign.goal) * 100,
                );

                return (
                  <div key={campaign.id} className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between gap-2">
                      <div>
                        <h3 className="font-medium">{campaign.title}</h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {campaign.ngo}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {campaign.daysLeft} days left
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="h-2 rounded-full bg-[#EAF4EC] overflow-hidden">
                        <div
                          className="h-full bg-[#2F6B3D]"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between mt-2 text-sm">
                        <span>₹{campaign.raised.toLocaleString()}</span>

                        <span>{progress}%</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full md:w-auto bg-[#2F6B3D] text-white px-4 py-2 rounded-lg">
                      Donate Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Donations */}

          <div className="bg-white rounded-2xl border border-black/5 shadow-sm">
            <div className="p-5 border-b border-black/5">
              <h2 className="font-semibold">Recent Donations</h2>
            </div>

            <div className="divide-y divide-black/5">
              {donations.map((donation) => (
                <div
                  key={donation.id}
                  className="p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
                >
                  <div>
                    <h4 className="font-medium">{donation.campaign}</h4>

                    <p className="text-sm text-gray-500">{donation.date}</p>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold">{donation.amount}</div>

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

        {/* Right Section */}

        <div className="space-y-6">
          {/* NGO Updates */}

          <div className="bg-white rounded-2xl border border-black/5 shadow-sm">
            <div className="p-5 border-b border-black/5">
              <h2 className="font-semibold">NGO Updates</h2>
            </div>

            <div className="divide-y divide-black/5">
              {updates.map((update) => (
                <div key={update.id} className="p-5">
                  <h4 className="font-medium">{update.ngo}</h4>

                  <p className="text-sm text-gray-600 mt-2">{update.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}

          <div className="bg-[#2F6B3D] text-white rounded-2xl p-5">
            <Heart size={24} className="mb-3" />

            <h3 className="font-semibold">Make a Difference Today</h3>

            <p className="text-sm text-green-100 mt-2">
              Explore verified campaigns and support causes you care about.
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
