import { DollarSign, Users, Activity, TrendingUp, ShoppingCart, FileText, UserPlus } from "lucide-react";

const kpiCards = [
  {
    label: "Total Revenue",
    value: "$48,295",
    change: "+12.5%",
    positive: true,
    icon: DollarSign,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "New Users",
    value: "3,842",
    change: "+8.1%",
    positive: true,
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Active Sessions",
    value: "1,259",
    change: "-3.2%",
    positive: false,
    icon: Activity,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Conversion Rate",
    value: "4.67%",
    change: "+0.4%",
    positive: true,
    icon: TrendingUp,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const recentOrders = [
  { id: "#ORD-1041", customer: "Alice Johnson", amount: "$120.00", status: "Completed" },
  { id: "#ORD-1040", customer: "Bob Martinez", amount: "$89.50", status: "Pending" },
  { id: "#ORD-1039", customer: "Carol Lee", amount: "$245.00", status: "Completed" },
  { id: "#ORD-1038", customer: "David Kim", amount: "$34.99", status: "Cancelled" },
  { id: "#ORD-1037", customer: "Eva Patel", amount: "$178.25", status: "Completed" },
];

const topPages = [
  { page: "/home", views: 14320 },
  { page: "/products", views: 9874 },
  { page: "/pricing", views: 6451 },
  { page: "/blog", views: 4210 },
  { page: "/about", views: 2983 },
];

const recentSignups = [
  { name: "Fiona Clarke", date: "Jul 14, 2025" },
  { name: "George Tan", date: "Jul 13, 2025" },
  { name: "Hannah Wu", date: "Jul 13, 2025" },
  { name: "Ivan Sousa", date: "Jul 12, 2025" },
  { name: "Julia Nguyen", date: "Jul 11, 2025" },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview of your application metrics.</p>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex items-start gap-4"
            >
              <div className={`${card.iconBg} p-3 rounded-lg`}>
                <Icon className={`${card.iconColor} w-5 h-5`} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p
                  className={`text-sm font-medium mt-1 ${
                    card.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {card.change} vs last month
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
            <ShoppingCart className="w-5 h-5 text-gray-500" />
            <h2 className="text-base font-semibold text-gray-800">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="px-6 py-3 font-medium">Order ID</th>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                    <td className="px-6 py-3 font-mono text-gray-600">{order.id}</td>
                    <td className="px-6 py-3 text-gray-800">{order.customer}</td>
                    <td className="px-6 py-3 text-gray-800">{order.amount}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          statusStyles[order.status] ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Pages */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
              <FileText className="w-5 h-5 text-gray-500" />
              <h2 className="text-base font-semibold text-gray-800">Top Pages</h2>
            </div>
            <ul className="divide-y divide-gray-50">
              {topPages.map((item) => (
                <li key={item.page} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50">
                  <span className="text-sm font-mono text-gray-700">{item.page}</span>
                  <span className="text-sm text-gray-500">{item.views.toLocaleString()} views</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Signups */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
              <UserPlus className="w-5 h-5 text-gray-500" />
              <h2 className="text-base font-semibold text-gray-800">Recent Signups</h2>
            </div>
            <ul className="divide-y divide-gray-50">
              {recentSignups.map((user) => (
                <li key={user.name} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-800">{user.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{user.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
