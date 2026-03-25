const summaryMetrics = [
  {
    label: "Total Sessions",
    value: "48,219",
    change: "+12.4% vs last month",
  },
  {
    label: "Conversion Rate",
    value: "4.8%",
    change: "+0.9 pts",
  },
  {
    label: "Qualified Leads",
    value: "1,284",
    change: "+18.1%",
  },
  {
    label: "Revenue Influenced",
    value: "$92,400",
    change: "+7.6%",
  },
];

const topChannels = [
  {
    channel: "Organic Search",
    sessions: "18,420",
    conversions: "6.2%",
    trend: "Up 9%",
  },
  {
    channel: "Email Campaigns",
    sessions: "9,870",
    conversions: "5.4%",
    trend: "Up 14%",
  },
  {
    channel: "Paid Social",
    sessions: "7,140",
    conversions: "3.8%",
    trend: "Up 4%",
  },
  {
    channel: "Referral Partners",
    sessions: "4,985",
    conversions: "4.6%",
    trend: "Flat",
  },
];

const recentTrends = [
  {
    period: "This week",
    insight: "Traffic remained strong across organic and email channels.",
  },
  {
    period: "Last 30 days",
    insight: "Lead quality improved after landing page updates on the pricing funnel.",
  },
  {
    period: "Quarter to date",
    insight: "Conversion gains are being driven by returning users and partner referrals.",
  },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-600 md:text-base">
            Monitor performance with a quick snapshot of traffic, conversions, and recent reporting trends.
          </p>
        </header>

        <section aria-labelledby="analytics-metrics-heading" className="space-y-4">
          <div>
            <h2 id="analytics-metrics-heading" className="text-lg font-medium text-gray-900">
              Summary Metrics
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summaryMetrics.length > 0 ? (
              summaryMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
                >
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">{metric.value}</p>
                  <p className="mt-1 text-sm text-green-700">{metric.change}</p>
                </article>
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-sm text-gray-500 sm:col-span-2 xl:col-span-4">
                No metrics available right now.
              </div>
            )}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <section aria-labelledby="top-channels-heading" className="space-y-4">
            <div>
              <h2 id="top-channels-heading" className="text-lg font-medium text-gray-900">
                Top-Performing Channels
              </h2>
              <p className="text-sm text-gray-600">
                A simple breakdown of which acquisition sources are delivering the strongest results.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              {topChannels.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-left">
                    <caption className="sr-only">Top-performing traffic channels and conversion performance</caption>
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-gray-700">
                          Channel
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-gray-700">
                          Sessions
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-gray-700">
                          Conversion Rate
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-gray-700">
                          Trend
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {topChannels.map((channel) => (
                        <tr key={channel.channel} className="hover:bg-gray-50">
                          <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-900">
                            {channel.channel}
                          </th>
                          <td className="px-4 py-3 text-sm text-gray-700">{channel.sessions}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{channel.conversions}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{channel.trend}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 text-sm text-gray-500">No channel performance data available.</div>
              )}
            </div>
          </section>

          <section aria-labelledby="recent-trends-heading" className="space-y-4">
            <div>
              <h2 id="recent-trends-heading" className="text-lg font-medium text-gray-900">
                Recent Trends
              </h2>
              <p className="text-sm text-gray-600">
                Highlights from the latest reporting cycle.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              {recentTrends.length > 0 ? (
                <ul className="space-y-4">
                  {recentTrends.map((trend) => (
                    <li key={trend.period} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h3 className="text-sm font-medium text-gray-900">{trend.period}</h3>
                      <p className="mt-1 text-sm text-gray-600">{trend.insight}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No trend insights available.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
