import { Activity, ArrowUpRight, CheckCircle2, LifeBuoy, MonitorCog, Users } from "lucide-react";

const resourceCards = [
  {
    title: "Support hours",
    description:
      "Mock coverage window: Monday to Friday, 8:00 AM to 6:00 PM local team time. Priority incidents are triaged first.",
    icon: LifeBuoy,
  },
  {
    title: "System status",
    description:
      "Check current platform health, maintenance notices, and known service disruptions before reporting widespread issues.",
    icon: Activity,
  },
  {
    title: "Onboarding help",
    description:
      "New admins can review setup checklists, role configuration guidance, and recommended first-week tasks.",
    icon: Users,
  },
  {
    title: "Technical diagnostics",
    description:
      "Collect browser version, device details, network notes, and exact timestamps to speed up troubleshooting.",
    icon: MonitorCog,
  },
];

const troubleshootingChecklist = [
  "Refresh the page and confirm the problem persists.",
  "Check whether the issue occurs for other users or only one account.",
  "Verify that the correct environment, project, or workspace is selected.",
  "Review recent changes to permissions, integrations, or configuration.",
  "Capture screenshots and exact error text before retrying major actions.",
];

const quickLinks = [
  "Help center articles",
  "Admin setup guide",
  "Integration troubleshooting",
  "Release notes and updates",
];

export default function SupportResources() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Additional support resources
        </h2>
        <p className="max-w-3xl text-sm leading-6 text-gray-600">
          Use these companion resources to route issues correctly, prepare a
          higher-quality request, and help teammates resolve common problems
          quickly.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resourceCards.map((resource) => {
          const Icon = resource.icon;
          return (
            <div
              key={resource.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {resource.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Common troubleshooting checklist
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            A short list to review before escalating a non-emergency issue.
          </p>
          <ul className="mt-4 space-y-3">
            {troubleshootingChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 className="mt-0.5 text-green-600" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Escalation guidance
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                If a critical workflow is unavailable for multiple users, gather
                impact details first, note when the issue began, and surface the
                incident through your highest-priority internal support channel.
              </p>
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                For realistic emergency handling, include user impact, scope,
                time detected, and whether a workaround exists.
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Useful quick links
              </h3>
              <div className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <div
                    key={link}
                    className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700"
                  >
                    <span>{link}</span>
                    <ArrowUpRight size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
