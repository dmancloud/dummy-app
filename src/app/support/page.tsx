import SupportHero from "@/components/support/SupportHero";
import SupportResources from "@/components/support/SupportResources";

const faqs = [
  {
    question: "What issues should I submit through this form?",
    answer:
      "Use this demo form for account access questions, project setup guidance, dashboard confusion, and non-urgent troubleshooting scenarios. It is presented as a mock support workflow and does not send live requests.",
  },
  {
    question: "How quickly would a real team typically respond?",
    answer:
      "For a realistic support experience, urgent platform-impacting issues are usually reviewed first, while general help requests are commonly answered within one business day.",
  },
  {
    question: "Can I include screenshots or reproduction steps?",
    answer:
      "Yes. Detailed descriptions, browser details, timestamps, and screenshots make troubleshooting much faster. This mock page includes fields that show how that information would normally be collected.",
  },
  {
    question: "Where can I look before opening a ticket?",
    answer:
      "Check the quick guides, status notes, onboarding resources, and troubleshooting checklist below. Many common setup and access questions can be resolved there first.",
  },
];

export default function SupportPage() {
  return (
    <main className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-medium text-blue-600">Support Center</p>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Get help with your workspace
        </h1>
        <p className="max-w-3xl text-sm leading-6 text-gray-600">
          Explore support options, review common questions, and walk through a
          polished mock ticket workflow designed to show how help could be
          requested across your team environment.
        </p>
      </section>

      <SupportHero />

      <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Submit a support request
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Share the details below so the right team can review your
                  issue.
                </p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                Demo form only
              </span>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
              This support form is a non-functional mockup for demonstration
              purposes. Submitting it will not create a real ticket or notify a
              live support team.
            </div>
          </div>

          <form className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Jordan Lee"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="jordan@company.com"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-700"
                >
                  Issue category
                </label>
                <select
                  id="category"
                  name="category"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="account">Account access</option>
                  <option value="billing">Billing and plan questions</option>
                  <option value="project">Project setup</option>
                  <option value="bug">Bug or unexpected behavior</option>
                  <option value="training">Training and onboarding help</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="priority"
                  className="text-sm font-medium text-gray-700"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  defaultValue="normal"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Unable to access project analytics"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="details"
                className="text-sm font-medium text-gray-700"
              >
                Issue details
              </label>
              <textarea
                id="details"
                name="details"
                rows={6}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Describe what happened, what you expected, and any steps already tried."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="environment"
                  className="text-sm font-medium text-gray-700"
                >
                  Environment
                </label>
                <select
                  id="environment"
                  name="environment"
                  defaultValue="production"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="production">Production</option>
                  <option value="staging">Staging</option>
                  <option value="sandbox">Sandbox</option>
                  <option value="unknown">Not sure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contactMethod"
                  className="text-sm font-medium text-gray-700"
                >
                  Preferred follow-up
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  defaultValue="email"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="email">Email</option>
                  <option value="chat">Team chat</option>
                  <option value="call">Scheduled call</option>
                </select>
              </div>
            </div>

            <fieldset className="space-y-3 rounded-xl border border-gray-200 p-4">
              <legend className="px-1 text-sm font-medium text-gray-700">
                Helpful context
              </legend>
              <div className="space-y-3">
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="hasSteps"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>I included steps to reproduce the issue.</span>
                </label>
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="hasScreenshot"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>I have screenshots or recordings available.</span>
                </label>
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="isBlocking"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>This issue is blocking a key workflow for my team.</span>
                </label>
              </div>
            </fieldset>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-gray-500">
                This button is intentionally non-operational in this demo UI.
                The form is shown to illustrate structure, accessibility, and
                support intake flow.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Preview request
              </button>
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">FAQs</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-gray-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Before you submit
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-lg bg-gray-50 px-3 py-2">
                Confirm whether the issue affects one user, a team, or the full
                workspace.
              </li>
              <li className="rounded-lg bg-gray-50 px-3 py-2">
                Note the project, page, or workflow where the issue occurred.
              </li>
              <li className="rounded-lg bg-gray-50 px-3 py-2">
                Include exact error text, timestamps, and browser information if
                available.
              </li>
            </ul>
          </section>
        </aside>
      </section>

      <SupportResources />
    </main>
  );
}
