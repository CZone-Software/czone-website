import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Website Design, Development & SEO Digital Marketing",
  description:
    "CZone Software delivers professional website design, development and SEO digital marketing services. From responsive websites and e-commerce to Google Ads and social media — your complete digital presence partner.",
};

const services = [
  {
    icon: "🎨",
    tag: "Look the part",
    title: "Website Design",
    body: "First impressions are made in milliseconds. We design websites that instantly communicate your brand's credibility — clean, modern, and intentionally crafted around your audience.",
    points: [
      "Custom UI/UX design built around your brand identity",
      "Mobile-first, responsive layouts across all screen sizes",
      "Landing pages optimised for conversion, not just aesthetics",
      "Interactive prototypes reviewed with you before a line is coded",
    ],
  },
  {
    icon: "⚙️",
    tag: "Built to perform",
    title: "Website Development",
    body: "Design is only half the story. We build fast, secure, maintainable websites and web applications that actually work — on every device, every browser, at every traffic level.",
    points: [
      "WordPress, Next.js, React and custom CMS builds",
      "E-commerce development with payment gateway integration",
      "Web apps, portals and admin dashboards",
      "Performance optimisation, security hardening and hosting setup",
    ],
  },
  {
    icon: "🔍",
    tag: "Get found first",
    title: "Search Engine Optimisation (SEO)",
    body: "A beautiful website no one can find is a missed opportunity. We apply proven, white-hat SEO practices so your target customers discover you before they discover your competitors.",
    points: [
      "On-page optimisation: meta, headings, content and schema markup",
      "Technical SEO: page speed, Core Web Vitals, crawl health",
      "Off-page: authoritative link building and local citations",
      "Monthly reporting tied to rankings, traffic and leads",
    ],
  },
  {
    icon: "📣",
    tag: "Reach the right people",
    title: "Digital Marketing",
    body: "Visibility without engagement is noise. We run focused digital marketing campaigns — paid and organic — that put your brand in front of decision-makers at exactly the right moment.",
    points: [
      "Google Ads (Search, Display, Remarketing) management",
      "LinkedIn, Facebook and Instagram paid campaigns",
      "Social media content strategy and community management",
      "Email marketing, lead nurturing and marketing automation",
    ],
  },
  {
    icon: "🛒",
    tag: "Sell online",
    title: "E-Commerce Development",
    body: "Whether you're selling 10 products or 10,000, we build e-commerce experiences that make buying easy and secure — and give you full control through an intuitive admin panel.",
    points: [
      "WooCommerce, Shopify and custom e-commerce platforms",
      "Secure payment gateway integration (Razorpay, Stripe, PayPal)",
      "Inventory, order and fulfilment management",
      "Product page optimisation for conversions and SEO",
    ],
  },
  {
    icon: "🔧",
    tag: "Stay sharp",
    title: "Website Revamp & Maintenance",
    body: "Websites age fast. We keep yours secure, up to date and performing — so it continues working as hard for your business in year three as it did on launch day.",
    points: [
      "Full redesigns and partial refreshes based on audit findings",
      "Ongoing security patches, backups and uptime monitoring",
      "Content updates, plugin management and CMS support",
      "Speed and Core Web Vitals improvements over time",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We map your business goals, audience, competitors and current digital footprint before touching a design tool or writing a line of code.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    body: "You receive a clear plan: sitemap, wireframes and visual design for review. Nothing moves to build until you've signed off.",
  },
  {
    step: "03",
    title: "Build & Optimise",
    body: "Development, SEO foundations and performance tuning — all done in parallel so the site launches ready to rank.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    body: "We go live together, hand you the keys, and stay on for marketing, maintenance and continuous improvement.",
  },
];

const whys = [
  {
    title: "Strategy before aesthetics",
    body: "We ask what the site needs to achieve before we choose a colour or layout. Every design decision has a business reason behind it.",
  },
  {
    title: "One team, no handoffs",
    body: "Design, development, SEO and marketing sit in the same room. What the designer builds is what the developer ships — and it's already SEO-ready.",
  },
  {
    title: "Built-in enterprise DNA",
    body: "CZone Software's core practice is enterprise software consulting. Your website benefits from that rigour — proper architecture, security and performance from day one.",
  },
  {
    title: "Transparent reporting",
    body: "No vanity metrics. You see rankings, traffic, conversion rates and leads — with plain-English commentary every month, not a dashboard you have to decode.",
  },
];

export default function WebServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-28">
        {/* subtle grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber backdrop-blur-sm">
            Website Design · Development · SEO · Digital Marketing
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Your complete
            <br />
            <span className="text-amber">digital presence</span>
            <br />
            partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            CZone Software designs, builds and markets websites that generate real business outcomes — from a clean first impression to a pipeline of inbound leads.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber px-8 py-3.5 font-display text-base font-bold text-ink shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a free proposal
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-white/25 px-8 py-3.5 font-display text-base font-semibold text-white transition hover:bg-white/10"
            >
              See our services
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-12 sm:grid-cols-4">
            {[
              { n: "50+", label: "Websites delivered" },
              { n: "3×", label: "Average traffic growth" },
              { n: "98%", label: "Client retention rate" },
              { n: "48 hr", label: "Typical response time" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-amber">{s.n}</p>
                <p className="mt-1 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section id="services" className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-royal">
              What we do
            </p>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Everything your digital presence needs
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65">
              From the first pixel to the first page-one ranking — we cover the full stack of digital services under one roof, so nothing falls through the cracks between agencies.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-2xl">
                  {s.icon}
                </span>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-royal">
                  {s.tag}
                </p>
                <h3 className="mb-3 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-ink/65">{s.body}</p>
                <ul className="mt-auto space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-ink/70">
                      <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-royal/10 text-royal">
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why CZone for web ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-royal">
                Why CZone Software
              </p>
              <h2 className="font-display text-3xl font-bold leading-snug text-ink md:text-4xl">
                Not just another web agency
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/65">
                Most web agencies stop at the launch. We keep going — because a website that doesn't generate leads, rank on search, or convert visitors isn't finished, it's just live.
              </p>
              <div className="mt-10 space-y-6">
                {whys.map((w) => (
                  <div key={w.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-amber/15">
                      <div className="h-2.5 w-2.5 rounded-full bg-amber" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">
                        {w.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-2xl bg-ink p-8 text-white shadow-lift">
                <p className="mb-6 text-sm font-bold uppercase tracking-widest text-amber">
                  What a project looks like
                </p>
                <div className="space-y-0">
                  {[
                    { label: "Discovery & strategy", done: true },
                    { label: "UI/UX design", done: true },
                    { label: "Development", done: true },
                    { label: "SEO foundations", done: true },
                    { label: "Launch", done: false },
                    { label: "Marketing & growth", done: false },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 border-b border-white/10 py-4 last:border-0`}
                    >
                      <div
                        className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-bold ${
                          item.done
                            ? "bg-amber text-ink"
                            : "border border-white/25 text-white/40"
                        }`}
                      >
                        {item.done ? "✓" : i + 1}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          item.done ? "text-white" : "text-white/50"
                        }`}
                      >
                        {item.label}
                      </span>
                      {i === 4 && (
                        <span className="ml-auto rounded-full bg-amber/20 px-2.5 py-0.5 text-xs font-bold text-amber">
                          next →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-relaxed text-white/50">
                  Every project follows this path — tailored to your timeline and budget.
                </p>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber/15 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-royal/15 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-royal">
              How we work
            </p>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              From idea to outcomes — in four steps
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative rounded-2xl bg-white p-7 shadow-card">
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-7 bg-ink/10 lg:block translate-x-full" />
                )}
                <p className="font-display text-4xl font-bold text-ink/10">{p.step}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber">
            Let's build something
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready for a website that actually works?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
            Tell us about your project and we'll come back with a proposal, a timeline and a clear price — no obligation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber px-8 py-3.5 font-display text-base font-bold text-ink shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a free proposal
            </Link>
            <Link
              href="mailto:info@czonesoftware.com"
              className="rounded-full border border-white/25 px-8 py-3.5 font-display text-base font-semibold text-white transition hover:bg-white/10"
            >
              Email us directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
