const integrations = [
  {
    name: "Jira",
    icon: "🧩",
    description: "Sync issues and project workflows with your engineering and support teams.",
    status: "Available",
    actionLabel: "Connect",
    statusTone: "available",
  },
  {
    name: "Linear",
    icon: "📐",
    description: "Route bug reports and product requests into streamlined team cycles.",
    status: "Available",
    actionLabel: "Connect",
    statusTone: "available",
  },
  {
    name: "Asana",
    icon: "✅",
    description: "Turn incoming requests into trackable tasks for operations and program teams.",
    status: "Available",
    actionLabel: "Connect",
    statusTone: "available",
  },
  {
    name: "Zendesk",
    icon: "🎧",
    description: "Mirror support activity with a familiar help desk workflow for customer teams.",
    status: "Demo linked",
    actionLabel: "Manage",
    statusTone: "connected",
  },
  {
    name: "GitHub Issues",
    icon: "🐙",
    description: "Create and review engineering work items tied to repository issue tracking.",
    status: "Available",
    actionLabel: "Connect",
    statusTone: "available",
  },
  {
    name: "ServiceNow",
    icon: "🏢",
    description: "Mock enterprise incident and request handoffs for IT service management flows.",
    status: "Coming soon",
    actionLabel: "View details",
    statusTone: "soon",
  },
] as const;

function getStatusClasses(statusTone: (typeof integrations)[number]["statusTone"]) {
  if (statusTone === "connected") {
    return "bg-green-100 text-green-800 border border-green-200";
  }

  if (statusTone === "soon") {
    return "bg-amber-100 text-amber-800 border border-amber-200";
  }

  return "bg-blue-100 text-blue-800 border border-blue-200";
}

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-blue-700">Integrations</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Connect your ticketing tools
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore mocked integrations for popular ticketing, workflow, and support platforms. These demo controls are for preview purposes only and do not perform real authentication, setup, or data syncing.
            </p>
          </div>

          <div
            role="status"
            aria-live="polite"
            className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 text-sm text-blue-900"
          >
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="text-lg leading-none">
                ℹ️
              </span>
              <div>
                <p className="font-medium">Demo environment notice</p>
                <p className="mt-1 leading-6 text-blue-800">
                  Connection states shown below are mocked for demonstration. Selecting Connect, Manage, or View details will not create a real account link or change any external system.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="available-integrations-heading">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2
              id="available-integrations-heading"
              className="text-lg font-semibold text-gray-900"
            >
              Available platforms
            </h2>
            <p className="text-sm text-gray-500">6 demo integrations</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {integrations.map((integration) => (
              <article
                key={integration.name}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xl"
                    >
                      {integration.icon}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {integration.name}
                      </h3>
                      <span
                        className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                          integration.statusTone
                        )}`}
                      >
                        {integration.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-600">
                  {integration.description}
                </p>

                <button
                  type="button"
                  aria-label={`${integration.actionLabel} ${integration.name} integration demo`}
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {integration.actionLabel}
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
