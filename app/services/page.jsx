import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Zoho licensing and reselling, implementation, customisation, integration, training and support from CZone Software, an Authorized Zoho Partner.",
};

const services = [
  {
    title: "Zoho licensing & reselling",
    tag: "Buy right the first time",
    body: "Choosing between Zoho One, CRM Plus and standalone apps — and between editions of each — is genuinely confusing. As an Authorized Zoho Partner we advise on the mix that fits your headcount, processes and budget, handle the licensing, and review it with you as you grow so you're never over-subscribed.",
    points: [
      "Edition and license planning across the full Zoho catalogue",
      "Partner pricing and renewal management",
      "License audits for teams already on Zoho",
    ],
  },
  {
    title: "Implementation",
    tag: "From kickoff to go-live",
    body: "A Zoho rollout touches your sales pipeline, your finances and your customer data — it deserves a plan. We run structured discovery, design the solution around your real workflows, migrate your data carefully and launch in stages your team can absorb.",
    points: [
      "Process mapping and discovery workshops",
      "Data migration from spreadsheets, legacy CRMs and accounting tools",
      "Staged go-live with testing and rollback plans",
    ],
  },
  {
    title: "Customisation & integration",
    tag: "Make Zoho fit you",
    body: "Custom modules, automation, Deluge scripting, Creator apps and integrations with the rest of your stack — this is where Zoho stops being generic software and starts being your system. We build for maintainability, so what we deliver keeps working as Zoho evolves.",
    points: [
      "Workflow automation and Deluge scripting",
      "Custom apps on Zoho Creator",
      "Integrations with accounting, e-commerce, telephony and more",
    ],
  },
  {
    title: "Training & support",
    tag: "Adoption that sticks",
    body: "The best-configured system fails if nobody uses it. We train your team role by role in plain language, document how your setup works, and stay available for support, fixes and improvements after launch.",
    points: [
      "Role-based training sessions and documentation",
      "Ongoing support plans and health checks",
      "Continuous improvement as your business changes",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="dots dots-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Everything you need to run your business on Zoho
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Four service lines, one accountable partner. Engage us for a single
            piece or the whole journey.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-16 sm:px-6">
        {services.map((s) => (
          <article
            key={s.title}
            className="grid gap-8 rounded-3xl border border-ink/10 bg-white p-8 shadow-card md:grid-cols-[1fr_1.4fr] md:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {s.tag}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-royal sm:text-3xl">
                {s.title}
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-ink/75">{s.body}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-ink/80">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-royal" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 text-center sm:px-6">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-royal px-8 py-4 text-sm font-semibold text-white shadow-lift transition hover:bg-deepblue"
        >
          Discuss your project
        </Link>
      </section>
    </>
  );
}
