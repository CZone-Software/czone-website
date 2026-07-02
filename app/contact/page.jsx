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
    "3a5053c9429c216d04e314533c2e2fbe7ac1e98da6bd108b6587b42b09657787",
  xmIwtLD:
    "34458cc755af59d9012964c7420367a73491e3f4cc887a15f5a748b8c91aac2ee2edf6f1959a505145bed40cd5b9bc16",
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
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=8ee1d96baf06a620f6b6b65c39d45328dbd3ffcf7b520f02e3eabf0f59e0384ed04bf52481647752dddb39fa63c8f6aegid6efaf0f51e7232312b735fe4d3030dea08ce3c4979d9dbba4c84d785afe21976gide28b0bda7c2acab6414abae658ab408330e985920b71469b572d680b399a5819gid3c7dc3a7c735a45031bd25bea1cdc54255fadcce8af2f2689c8d6fce1643ed59&tw=fb9d2be0a6c62866c87dcda02cccd0985d8321bb031288de8c0d6ad2b73c2c82"
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
