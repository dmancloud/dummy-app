import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Clock3,
  Shield,
  UserCog,
  Users,
  Activity,
  KeyRound,
  Database,
  TrendingUp,
} from "lucide-react";

const overviewCards = [
  {
    label: "Total Users",
    value: "1,284",
    change: "+42 this week",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Active Admins",
    value: "18",
    change: "2 on duty now",
    icon: Shield,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    label: "Pending Invites",
    value: "11",
    change: "4 expiring soon",
    icon: Clock3,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    label: "Security Alerts",
    value: "3",
    change: "1 high priority",
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const users = [
  {
    id: "USR-1001",
    name: "Ava Thompson",
    email: "ava.thompson@acme.io",
    role: "Admin",
    status: "Active",
    lastSeen: "2 minutes ago",
  },
  {
    id: "USR-1002",
    name: "Noah Garcia",
    email: "noah.garcia@acme.io",
    role: "Editor",
    status: "Pending",
    lastSeen: "Invited today",
  },
  {
    id: "USR-1003",
    name: "Mia Patel",
    email: "mia.patel@acme.io",
    role: "Viewer",
    status: "Active",
    lastSeen: "1 hour ago",
  },
  {
    id: "USR-1004",
    name: "Liam Chen",
    email: "liam.chen@acme.io",
    role: "Admin",
    status: "Suspended",
    lastSeen: "Yesterday",
  },
  {
    id: "USR-1005",
    name: "Sophia Rivera",
    email: "sophia.rivera@acme.io",
    role: "Support",
    status: "Active",
    lastSeen: "5 minutes ago",
  },
];

const roleSummary = [
  {
    role: "Admin",
    count: 18,
    description: "Full platform access and security controls",
    badgeClass: "bg-violet-100 text-violet-700",
  },
  {
    role: "Editor",
    count: 46,
    description: "Can manage content and team workflows",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    role: "Viewer",
    count: 172,
    description: "Read-only access to dashboards and reports",
    badgeClass: "bg-gray-100 text-gray-700",
  },
  {
    role: "Support",
    count: 29,
    description: "Handles user operations and issue resolution",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
];

const auditLogs = [
  {
    id: "AUD-501",
    timestamp: "Today, 09:41",
    actor: "Ava Thompson",
    action: "Updated role",
    target: "Noah Garcia → Editor",
    severity: "Info",
  },
  {
    id: "AUD-500",
    timestamp: "Today, 08:17",
    actor: "System",
    action: "Flagged login anomaly",
    target: "Liam Chen account",
    severity: "Warning",
  },
  {
    id: "AUD-499",
    timestamp: "Yesterday, 18:26",
    actor: "Sophia Rivera",
    action: "Reset password",
    target: "USR-1048",
    severity: "Info",
  },
  {
    id: "AUD-498",
    timestamp: "Yesterday, 14:03",
    actor: "Ava Thompson",
    action: "Revoked API token",
    target: "Analytics integration",
    severity: "Critical",
  },
  {
    id: "AUD-497",
    timestamp: "Yesterday, 11:12",
    actor: "Noah Garcia",
    action: "Created invite",
    target: "sara.lee@acme.io",
    severity: "Info",
  },
];

const analyticsMetrics = [
  {
    label: "Monthly Active Users",
    value: "9,420",
    trend: "+6.8% from last month",
    icon: TrendingUp,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "Feature Adoption",
    value: "72%",
    trend: "+4.1% after onboarding update",
    icon: BarChart3,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "API Requests",
    value: "1.8M",
    trend: "Stable over 7 days",
    icon: Database,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    label: "SSO Enabled Accounts",
    value: "314",
    trend: "+19 enterprise workspaces",
    icon: KeyRound,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Suspended: "bg-red-100 text-red-700",
};

const roleStyles: Record<string, string> = {
  Admin: "bg-violet-100 text-violet-700",
  Editor: "bg-blue-100 text-blue-700",
  Viewer: "bg-gray-100 text-gray-700",
  Support: "bg-emerald-100 text-emerald-700",
};

const severityStyles: Record<string, string> = {
  Info: "bg-blue-100 text-blue-700",
  Warning: "bg-yellow-100 text-yellow-700",
  Critical: "bg-red-100 text-red-700",
};

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Monitor access, user activity, security events, and product usage from one place.</p>
      </div>

      <section aria-labelledby="overview-heading" className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-gray-500" />
          <h2 id="overview-heading" className="text-base font-semibold text-gray-800">
            Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {overviewCards.map((card) => {
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
                  <p className="text-sm font-medium mt-1 text-gray-600">{card.change}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <section aria-labelledby="user-management-heading" className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
            <UserCog className="w-5 h-5 text-gray-500" />
            <div>
              <h2 id="user-management-heading" className="text-base font-semibold text-gray-800">
                User Management
              </h2>
              <p className="text-sm text-gray-500">Recent users, roles, and current account status</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th scope="col" className="px-6 py-3 font-medium">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Last Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 align-top">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-gray-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            roleStyles[user.role] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            statusStyles[user.status] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{user.lastSeen}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      No users available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="role-summary-heading" className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
            <Shield className="w-5 h-5 text-gray-500" />
            <div>
              <h2 id="role-summary-heading" className="text-base font-semibold text-gray-800">
                Role & Access Summary
              </h2>
              <p className="text-sm text-gray-500">Quick breakdown of users by permission level</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {roleSummary.length > 0 ? (
              roleSummary.map((item) => (
                <div key={item.role} className="rounded-lg border border-gray-100 p-4">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${item.badgeClass}`}>
                      {item.role}
                    </span>
                    <span className="text-lg font-bold text-gray-900">{item.count}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No role data available.</p>
            )}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <section aria-labelledby="audit-log-heading" className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
            <CheckCircle2 className="w-5 h-5 text-gray-500" />
            <div>
              <h2 id="audit-log-heading" className="text-base font-semibold text-gray-800">
                Audit Log
              </h2>
              <p className="text-sm text-gray-500">Latest administrative and security-related activity</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th scope="col" className="px-6 py-3 font-medium">
                    Timestamp
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Actor
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Target
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Severity
                  </th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.length > 0 ? (
                  auditLogs.map((log) => (
                    <tr key={log.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 align-top">
                      <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{log.timestamp}</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">{log.actor}</td>
                      <td className="px-6 py-4 text-gray-700">{log.action}</td>
                      <td className="px-6 py-4 text-gray-600">{log.target}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            severityStyles[log.severity] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {log.severity}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No audit activity available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="analytics-heading" className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
            <BarChart3 className="w-5 h-5 text-gray-500" />
            <div>
              <h2 id="analytics-heading" className="text-base font-semibold text-gray-800">
                Analytics
              </h2>
              <p className="text-sm text-gray-500">High-level adoption, usage, and platform health metrics</p>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {analyticsMetrics.length > 0 ? (
              analyticsMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      </div>
                      <div className={`${metric.iconBg} p-2 rounded-lg`}>
                        <Icon className={`${metric.iconColor} w-5 h-5`} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{metric.trend}</p>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-500">No analytics available.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
