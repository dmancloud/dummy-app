"use client";

import { FormEvent, useId, useState } from "react";
import { CheckCircle2, Info, LifeBuoy } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  category: string;
  priority: string;
  area: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  category: "",
  priority: "",
  area: "",
  message: "",
};

export default function SupportRequestForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setSubmitted(false);
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const categoryId = `${formId}-category`;
  const priorityId = `${formId}-priority`;
  const areaId = `${formId}-area`;
  const messageId = `${formId}-message`;
  const noticeId = `${formId}-notice`;
  const successId = `${formId}-success`;

  return (
    <section
      aria-labelledby={`${formId}-heading`}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-sky-50 p-3 text-sky-600">
          <LifeBuoy className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h2 id={`${formId}-heading`} className="text-2xl font-semibold text-slate-900">
            Submit a support request
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            Share a few details about the issue and we&apos;ll route it to the right team.
            This experience is a polished demo only, so no real ticket is created when you
            submit the form.
          </p>
        </div>
      </div>

      <div
        id={noticeId}
        className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
        role="note"
      >
        <Info className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
        <p>
          Demo mode: this form is non-functional and is intended to showcase the support
          workflow UI. You can fill out every field and trigger a mock confirmation message.
        </p>
      </div>

      {submitted ? (
        <div
          id={successId}
          className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-medium">Mock request captured</p>
            <p>
              Thanks, {formState.name || "there"}. In a real product, your request would now
              be queued and assigned based on the selected category and priority.
            </p>
          </div>
        </div>
      ) : null}

      <form
        className="mt-8 space-y-8"
        onSubmit={handleSubmit}
        aria-describedby={noticeId}
      >
        <fieldset className="space-y-6">
          <legend className="text-base font-semibold text-slate-900">Contact details</legend>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor={nameId} className="block text-sm font-medium text-slate-900">
                Full name
              </label>
              <input
                id={nameId}
                name="name"
                type="text"
                autoComplete="name"
                value={formState.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                aria-describedby={`${nameId}-hint`}
                required
              />
              <p id={`${nameId}-hint`} className="text-sm text-slate-500">
                Enter the name a support teammate should use when following up.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor={emailId} className="block text-sm font-medium text-slate-900">
                Work email
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={formState.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                aria-describedby={`${emailId}-hint`}
                required
              />
              <p id={`${emailId}-hint`} className="text-sm text-slate-500">
                Use your company address so the request can be associated with the right
                workspace.
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset className="space-y-6">
          <legend className="text-base font-semibold text-slate-900">Issue details</legend>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label htmlFor={categoryId} className="block text-sm font-medium text-slate-900">
                Issue category
              </label>
              <select
                id={categoryId}
                name="category"
                value={formState.category}
                onChange={(event) => updateField("category", event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                aria-describedby={`${categoryId}-hint`}
                required
              >
                <option value="">Select a category</option>
                <option value="billing">Billing and invoices</option>
                <option value="access">Login or account access</option>
                <option value="bug">Bug or unexpected behavior</option>
                <option value="integration">Integrations and APIs</option>
                <option value="feature">Feature guidance</option>
              </select>
              <p id={`${categoryId}-hint`} className="text-sm text-slate-500">
                Choose the closest match to help route the ticket quickly.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor={priorityId} className="block text-sm font-medium text-slate-900">
                Priority
              </label>
              <select
                id={priorityId}
                name="priority"
                value={formState.priority}
                onChange={(event) => updateField("priority", event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                aria-describedby={`${priorityId}-hint`}
                required
              >
                <option value="">Select priority</option>
                <option value="low">Low — general question</option>
                <option value="medium">Medium — blocking a task</option>
                <option value="high">High — major workflow impact</option>
                <option value="urgent">Urgent — widespread outage</option>
              </select>
              <p id={`${priorityId}-hint`} className="text-sm text-slate-500">
                Pick the business impact level rather than how long the issue has existed.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor={areaId} className="block text-sm font-medium text-slate-900">
                Workspace or app area
              </label>
              <input
                id={areaId}
                name="area"
                type="text"
                value={formState.area}
                onChange={(event) => updateField("area", event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                aria-describedby={`${areaId}-hint`}
                required
              />
              <p id={`${areaId}-hint`} className="text-sm text-slate-500">
                Example: Analytics dashboard, mobile app, admin settings, or Team Phoenix.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor={messageId} className="block text-sm font-medium text-slate-900">
              What happened?
            </label>
            <textarea
              id={messageId}
              name="message"
              rows={6}
              value={formState.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              aria-describedby={`${messageId}-hint`}
              required
            />
            <p id={`${messageId}-hint`} className="text-sm text-slate-500">
              Include what you expected to happen, what actually happened, and any relevant
              steps to reproduce the issue.
            </p>
          </div>
        </fieldset>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-slate-500">
            By selecting submit, you&apos;ll only see a mock confirmation on this demo page. No
            data is sent to a backend service.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Submit demo request
          </button>
        </div>
      </form>
    </section>
  );
}
