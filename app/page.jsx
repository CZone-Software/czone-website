import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    title: "Licensing & advisory",
    body: "The Zoho ecosystem is huge — 55+ apps and counting. As an Authorized Zoho Partner we help you choose the right editions and licenses for where your business is today, so you never pay for shelf-ware.",
  },
  {
    title: "Implementation",
    body: "Software only pays off when it goes live cleanly. We map your processes, migrate your data, configure your workspace and launch on a plan — not on hope.",
  },
  {
    title: "Customisation & integration",
    body: "Out-of-the-box rarely fits growing businesses. We tailor Zoho to your workflows and connect it to the systems you already run, so your data flows where you need it.",
  },
  {
    title: "Training & support",
    body: "Adoption is where projects live or die. We train your team in plain language and stay on hand after go-live, so the system your people use is the system you paid for.",
  },
];

const solutions = [
  {
    name: "Zoho One",
    logo: "/zoho/one.svg",
    blurb: "The all-in-one operating system for business — 55+ integrated apps under one license.",
  },
  {
    name: "Zoho CRM",
    logo: "/zoho/crm.svg",
    blurb: "Pipeline, automation and sales insight configured around how your team actually sells.",
  },
  {
    name: "Zoho Books & Finance",
    logo: "/zoho/books.svg",
    blurb: "Accounting, invoicing and inventory that stay in sync with the rest of your stack.",
  },
  {
    name: "Zoho Desk",
    logo: "/zoho/desk.svg",
    blurb: "Helpdesk and customer support tooling that keeps response times short and customers loyal.",
  },
  {
    name: "Zoho People & Recruit",
    logo: "/zoho/people.svg",
    blurb: "HR and recruitment software to hire, onboard and grow your team without the paperwork.",
  },
  {
    name: "Zoho Analytics",
    logo: "/zoho/analytics.svg",
    blurb: "Dashboards and reporting that turn scattered data into decisions you can trust.",
  },
  {
    name: "Zoho Creator",
    logo: "/zoho/creator.svg",
    blurb: "Custom low-code apps for the processes no off-the-shelf product was built for.",
  },
  {
    name: "Integrations",
    blurb: "Reliable connections between Zoho and your other mission-critical systems.",
  },
];

const steps = [
  {
    n: "1",
    title: "Discover",
    body: "We sit down with you, map your processes and find where software is holding you back.",
  },
  {
    n: "2",
    title: "Design",
    body: "You get a clear solution blueprint: the right Zoho apps, editions, licenses and integrations.",
  },
  {
    n: "3",
    title: "Implement",
    body: "We configure, customise, migrate your data and test — then launch on schedule.",
  },
  {
    n: "4",
    title: "Adopt & grow",
    body: "Training, documentation and ongoing support so the system sticks and scales with you.",
  },
];

const industries = [
  "Professional services",
  "Wholesale & distribution",
  "Manufacturing",
  "Retail & e-commerce",
  "Healthcare",
  "Real estate",
  "Not-for-profits",
  "Startups & SMBs",
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="dots dots-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Authorized Zoho Partner</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Get into the zone where <span className="text-royal">Zoho just works</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
              CZone Software helps you choose, license, implement and adopt the
              Zoho ecosystem — so your team spends less time fighting software
              and more time growing the business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-deepblue"
              >
                Book a free consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-royal hover:text-royal"
              >
                Explore our services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-ink/5">
              <Image
                src="/czone-hero.jpg"
                alt="CZone Software — Zoho Authorized Partner desk plaque in our Bengaluru office"
                width={1200}
                height={800}
                priority
                className="h-auto w-full"
              />
              <p className="bg-tint px-4 py-3 text-center text-sm font-semibold text-royal">
                Zoho reselling · implementation · support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pillars ─── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" id="pillars">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          One partner, end to end — from license to launch to long after
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-ink/10 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-xl font-bold text-royal">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Solutions ─── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white" id="solutions">
        <div className="dots-dense absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="eyebrow !text-amber">Solutions powered by Zoho</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The whole Zoho ecosystem, matched to your business
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            SMB through enterprise and everything in between — we implement the
            apps below individually or as one connected platform.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s) => (
              <article
                key={s.name}
                className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/[0.12]"
              >
                {s.logo ? (
                  <span className="inline-flex h-10 items-center rounded-lg bg-white px-3">
                    <Image src={s.logo} alt={`${s.name} logo`} width={96} height={28} className="h-6 w-auto" />
                  </span>
                ) : (
                  <span className="inline-flex h-10 items-center rounded-lg bg-white/10 px-3 font-display text-sm font-bold text-amber ring-1 ring-white/20">
                    API ⇄
                  </span>
                )}
                <h3 className="mt-4 font-display text-lg font-bold text-amber">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" id="process">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          A four-step path from “it’s a mess” to “it just works”
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl bg-tint p-7">
              <span className="font-display text-4xl font-extrabold text-royal/30">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Why CZone ─── */}
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Why CZone</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Approachable experts, invested in your outcome
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              As an Authorized Zoho Partner, we don’t just sell licenses — we
              take responsibility for results. That means honest advice about
              what you actually need, transparent pricing, deep discovery
              before a single setting is changed, and a team that picks up the
              phone after go-live.
            </p>
            <ul className="mt-6 space-y-3 text-ink/80">
              {[
                "Authorized Zoho Partner status — direct access to Zoho resources and pricing",
                "Implementation-first mindset: adoption is the goal, not the invoice",
                "Plain-language training for every team, not just admins",
                "Support that continues long after launch day",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-amber" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full border-2 border-royal px-7 py-3 text-sm font-semibold text-royal transition hover:bg-royal hover:text-white"
            >
              More about us
            </Link>
          </div>

          <figure className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5">
            <div className="dots h-2 w-24 rounded-full" aria-hidden="true" />
            <blockquote className="mt-6 font-display text-xl font-semibold leading-snug">
              “CZone mapped our whole sales process into Zoho CRM in weeks. Our
              team actually uses it — that’s the difference.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink/60">
              <span className="font-semibold text-ink">Arvind</span> — President, VirtueS
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
          Industries we work with
        </h2>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <li
              key={i}
              className="rounded-full border border-ink/15 px-5 py-2 text-sm font-medium text-ink/70"
            >
              {i}
            </li>
          ))}
        </ul>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-royal py-20 text-white">
        <div className="dots-dense absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to simplify and supercharge your business with Zoho?
          </h2>
          <p className="mt-4 text-white/85">
            Tell us where it hurts. We’ll show you what the right Zoho setup
            can do — no obligation, no jargon.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-amber px-8 py-4 text-sm font-bold text-ink shadow-lift transition hover:brightness-105"
          >
            Chat with us
          </Link>
        </div>
      </section>
    </>
  );
}
