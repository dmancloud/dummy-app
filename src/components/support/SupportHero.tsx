import { AlertCircle, BookOpen, Clock3, MessagesSquare, ShieldCheck, Zap } from "lucide-react";

const supportOptions = [
  {
    title: "General support",
    description: "Best for product questions, setup guidance, and everyday troubleshooting.",
    icon: MessagesSquare,
    tone: "bg-blue-50 text-blue-700 ring-blue-100",
  },
  {
    title: "Urgent operational issue",
    description: "Use when a core workflow is blocked for multiple users or a delivery deadline is at risk.",
    icon: AlertCircle,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    title: "Security and access",
    description: "For suspicious activity, permission confusion, MFA concerns, or account recovery help.",
    icon: ShieldCheck,
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
];

const quickCards = [
  {
    title: "Typical first response",
    value: "Within 1 business day",
    icon: Clock3,
  },
  {
    title: "Priority triage",
    value: "Urgent requests reviewed first",
    icon: Zap,
  },
  {
    title: "Helpful self-service",
    value: "Docs, onboarding, and troubleshooting guides",
    icon: BookOpen,
  },
];

export default function SupportHero() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
            Friendly, guided support experience
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Find the right path to help faster
          </h2>
          <p className="text-sm leading-6 text-gray-600">
            Whether you need help diagnosing a dashboard issue, getting a new
            teammate onboarded, or understanding access permissions, this mock
            support center organizes requests by urgency and type so the next
            step is clear.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {quickCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/70 bg-white/80 p-4 backdrop-blur"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Icon size={18} />
                  </div>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    {card.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {card.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Choose a support route
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Start with the option that best matches your current need.
          </p>
        </div>
        <div className="space-y-3">
          {supportOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="rounded-xl border border-gray-200 p-4 transition hover:border-gray-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${option.tone}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {option.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
