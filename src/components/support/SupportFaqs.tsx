const faqs = [
  {
    question: "How quickly does the support team usually respond?",
    answer:
      "For this mock experience, no real response is sent. In a typical support workflow, urgent issues would be triaged first, while standard product questions would be answered in the order received.",
  },
  {
    question: "What information should I include in a support request?",
    answer:
      "The most helpful requests include the affected workspace or feature area, a summary of what you expected to happen, what actually happened, timestamps if relevant, and exact reproduction steps when the issue is repeatable.",
  },
  {
    question: "Can I report billing, login, and technical issues from the same form?",
    answer:
      "Yes. The issue category selector is designed to route different request types such as billing questions, account access problems, bugs, integration support, and feature guidance to the most appropriate queue.",
  },
  {
    question: "Is there a way to escalate a production outage?",
    answer:
      "A real support portal would usually provide an urgent or critical priority option for widespread incidents. In this demo, selecting a higher priority simply changes the mock submission context and does not contact an on-call team.",
  },
  {
    question: "Do you need screenshots or recordings?",
    answer:
      "Visual context is often valuable, especially for UI or workflow issues. This demo form does not accept attachments, but the message field encourages users to describe visible errors and reproduction steps clearly.",
  },
  {
    question: "Will my request be saved if I leave the page?",
    answer:
      "No. This page is intentionally non-functional and does not persist drafts or submit data anywhere. It is presentational only, intended to demonstrate how a support center could be organized.",
  },
];

export default function SupportFaqs() {
  return (
    <section
      aria-labelledby="support-faqs-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-2">
        <h2 id="support-faqs-heading" className="text-2xl font-semibold text-slate-900">
          Frequently asked questions
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Find quick answers to common support topics, response expectations, and what to
          include when reporting an issue.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-slate-900 outline-none marker:hidden focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-sky-100">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="text-xl leading-none text-slate-400 transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="pt-4 text-sm leading-6 text-slate-600">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
