"use client";

import { useState } from "react";

/*
  NOTE FOR CZONE:
  The quickest production-ready option — very on-brand for a Zoho partner —
  is to replace this form with an embedded Zoho Form or a Zoho CRM Webform,
  which will pipe leads straight into your CRM.
  Until then, this form opens the visitor's email client with a prefilled
  message to hello@czonesoftware.com (update the address below).
*/
const CONTACT_EMAIL = "contact@czonesoftware.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="dots dots-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tell us where it hurts
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            A short conversation is usually enough to see whether Zoho — and
            CZone — are the right fit. No obligation, no jargon.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <form onSubmit={submit} className="rounded-3xl border border-ink/10 bg-white p-8 shadow-card">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-normal outline-none transition focus:border-royal"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-semibold">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-normal outline-none transition focus:border-royal"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold">
            Company
            <input
              name="company"
              value={form.company}
              onChange={update}
              className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-normal outline-none transition focus:border-royal"
              placeholder="Company name (optional)"
            />
          </label>
          <label className="mt-5 block text-sm font-semibold">
            How can we help?
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={update}
              className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-normal outline-none transition focus:border-royal"
              placeholder="Tell us about your business and what you're trying to fix or build…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-royal px-8 py-4 text-sm font-semibold text-white shadow-lift transition hover:bg-deepblue sm:w-auto"
          >
            Send message
          </button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-tint p-7">
            <h2 className="font-display text-lg font-bold">Prefer email or a call?</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:contact@czonesoftware.com" className="font-semibold text-royal hover:underline">
                  contact@czonesoftware.com
                </a>
              </li>
              <li>
                <a href="mailto:zoho@czonesoftware.com" className="font-semibold text-royal hover:underline">
                  zoho@czonesoftware.com
                </a>
              </li>
              <li>
                <a href="tel:+917386031488" className="font-semibold text-royal hover:underline">
                  +91 73860 31488
                </a>
              </li>
            </ul>
            <h2 className="mt-6 font-display text-lg font-bold">Head office</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              71, 6th Main Rd, HAL 2nd Stage,
              <br />
              Indiranagar, Bengaluru,
              <br />
              Karnataka 560008, India
            </p>
          </div>
          <div className="rounded-3xl border border-amber/50 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              Authorized Zoho Partner
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Working with an authorized partner means direct access to Zoho
              resources, correct licensing from day one, and an implementation
              team accountable for the outcome.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
