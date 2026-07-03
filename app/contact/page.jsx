"use client";

import { useState } from "react";
import Script from "next/script";

/*
  Zoho CRM Web-to-Lead integration.
  Submissions post directly to your Zoho CRM (crm.zoho.in) as Leads.
  The hidden field values below come from your generated Zoho web form —
  if you ever regenerate the form in Zoho, update these values to match.
*/
const ZOHO_ENDPOINT = "https://crm.zoho.in/crm/WebToLeadForm";
const ZOHO_HIDDEN = {
  xnQsjsdp:
    "05583a8bd780714a2e763613485ddca65f94219d4e602e255e2bc9b0c6315d67",
  xmIwtLD:
    "76a20123714a69c965529efdb23f54a76071446d94fbe07a4cef0782b57a1837ae4e810f53196e7efc502fd6c27a72ff",
  actionType: "TGVhZHM=",
  returnURL: "null",
};

const inputCls =
  "mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-normal outline-none transition focus:border-royal";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [splash, setSplash] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("sending");
    try {
      const fd = new FormData(formEl);
      Object.entries(ZOHO_HIDDEN).forEach(([k, v]) => fd.append(k, v));
      fd.append("zc_gad", "");
      fd.append("Lead Source", "Website");
      fd.append("aG9uZXlwb3Q", ""); // Zoho spam honeypot — must stay empty

      const res = await fetch(ZOHO_ENDPOINT, {
        method: "POST",
        body: fd,
        cache: "no-cache",
      });
      const contentType = res.headers.get("Content-Type") || "";
      const data = contentType.includes("application/json")
        ? await res.json()
        : await res.text();

      if (typeof data === "object" && data.actionsubmit === "error_msg") {
        setStatus("error");
        setSplash(data.message || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setSplash(
        (typeof data === "object" && data.actionvalue) ||
          "Thank you! Your message has been sent — we'll be in touch shortly."
      );
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setSplash(
        "We couldn't send your message. Please email us directly at contact@czonesoftware.com."
      );
    }
  };

  return (
    <>
      {/* Zoho web form analytics tracking */}
      <Script
        id="wf_anal"
        strategy="afterInteractive"
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=ce36e9c30f79e4e91f01ba059e2a16fce55d239819a6088f1aecabfad4d90d093ac6cd10cb80093802a6116171cb4288gida6bde677cf4b40c85ba0814de3c22eb517d9a2127d564d675a6bfa2c3e42869dgid723a9020c9d789a7a2fe134bec1f9c15768b3234dee125a09ee74cfe0cdd6173gidf12c42b8389e608ba8477f4dde2cfcf20557bbebbd666329d5132d95127e5388&tw=c2d8bf41bf259e1a5a37f0acbff705e6587e5bf585f4fb1d9d3a1a831e29aaf9"
      />

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
        <div>
          {status === "success" ? (
            <div
              role="status"
              className="rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-card"
            >
              <span
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-royal text-2xl text-white"
                aria-hidden="true"
              >
                ✓
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">
                Message sent
              </h2>
              <p className="mx-auto mt-3 max-w-md text-ink/70">{splash}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border-2 border-royal px-6 py-2.5 text-sm font-semibold text-royal transition hover:bg-royal hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="rounded-3xl border border-ink/10 bg-white p-8 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  First name <span className="text-red-600">*</span>
                  <input
                    required
                    name="First Name"
                    maxLength={40}
                    className={inputCls}
                    placeholder="First name"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Last name <span className="text-red-600">*</span>
                  <input
                    required
                    name="Last Name"
                    maxLength={80}
                    className={inputCls}
                    placeholder="Last name"
                  />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Email <span className="text-red-600">*</span>
                  <input
                    required
                    type="email"
                    name="Email"
                    maxLength={100}
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Phone <span className="text-red-600">*</span>
                  <input
                    required
                    type="tel"
                    name="Phone"
                    maxLength={30}
                    className={inputCls}
                    placeholder="+91 ..."
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">
                Company <span className="text-red-600">*</span>
                <input
                  required
                  name="Company"
                  maxLength={200}
                  className={inputCls}
                  placeholder="Company name"
                />
              </label>
              <label className="mt-5 block text-sm font-semibold">
                Which Zoho product are you interested in?
                <select
                  name="LEADCF2"
                  defaultValue="-None-"
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-normal outline-none transition focus:border-royal"
                >
                  <option value="-None-">Not sure yet / multiple</option>
                  <option>Zoho One</option>
                  <option>Zoho CRM</option>
                  <option>Zoho Books</option>
                  <option>Zoho Desk</option>
                  <option>Zoho Analytics</option>
                  <option>Zoho Creator</option>
                  <option>Zoho Inventory</option>
                  <option>Zoho Mail</option>
                  <option>Zoho Payroll</option>
                  <option>Zoho People</option>
                  <option>Zoho Projects</option>
                  <option>Zoho Recruit</option>
                  <option>Zoho SalesIQ</option>
                  <option>Zoho Sign</option>
                </select>
              </label>
              <label className="mt-5 block text-sm font-semibold">
                How can we help?
                <textarea
                  name="Description"
                  rows={5}
                  className={inputCls}
                  placeholder="Tell us about your business and what you're trying to fix or build…"
                />
              </label>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {splash}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-full bg-royal px-8 py-4 text-sm font-semibold text-white shadow-lift transition hover:bg-deepblue disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="mt-4 text-xs text-ink/50">
                Submissions go straight into our Zoho CRM — practising what we
                implement.
              </p>
            </form>
          )}
        </div>

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
