import Link from "next/link";

export const metadata = {
  title: "Success Stories",
  description:
    "How Indian businesses across real estate, manufacturing, e-commerce, IT services, distribution and staffing run better on Zoho — implemented by CZone Software.",
};

/*
  NOTE: These case studies are anonymized, representative engagements.
  Replace the details and metrics with data from real client projects
  as they complete — search for each story below and edit in place.
*/

const stories = [
  {
    sector: "Real Estate — Bengaluru",
    icon: "realestate",
    apps: ["Zoho CRM", "Zoho Sign"],
    title: "From lost site-visit leads to a 34% higher booking conversion",
    challenge:
      "A mid-size residential developer was running sales on spreadsheets and WhatsApp. Leads from property portals, walk-ins and channel partners landed in different places; follow-ups depended on individual memory, and management had no reliable pipeline view across three active projects.",
    solution:
      "We implemented Zoho CRM with a custom pipeline per project, automatic lead capture from portals and the website, round-robin assignment to sales executives, and WhatsApp/SMS follow-up sequences. Booking paperwork moved to Zoho Sign, cutting the post-token-payment paper chase.",
    results: [
      "34% improvement in enquiry-to-booking conversion within two quarters",
      "Every lead source tracked — channel partner ROI visible for the first time",
      "Agreement signing time down from 6 days to under 48 hours",
    ],
  },
  {
    sector: "Manufacturing — Pune",
    icon: "manufacturing",
    apps: ["Zoho People", "Zoho Payroll"],
    title: "Payroll for 240 factory and office staff, closed in a day instead of a week",
    challenge:
      "An auto-components manufacturer managed attendance on standalone biometric devices and payroll in Excel. Every month-end meant manual reconciliation of shifts, overtime and statutory deductions — with frequent errors triggering rework and employee grievances.",
    solution:
      "Zoho People was rolled out with biometric integration, shift schedules and leave policies matching their factory rules. Zoho Payroll was configured for PF, ESI, PT and TDS compliance, pulling attendance data automatically, with payslips delivered to the employee self-service portal.",
    results: [
      "Monthly payroll cycle reduced from 5–6 days to under 1 day",
      "Statutory filings (PF/ESI/PT) generated automatically, on time every month",
      "HR queries dropped sharply — employees self-serve payslips and leave balances",
    ],
  },
  {
    sector: "D2C E-commerce — Mumbai",
    icon: "ecommerce",
    apps: ["Zoho One"],
    title: "Nine disconnected tools replaced by one suite for a growing D2C brand",
    challenge:
      "A direct-to-consumer wellness brand was paying for nine separate tools — CRM, email marketing, helpdesk, accounting, inventory, project boards and more — with customer data fragmented across all of them and no single view of the business.",
    solution:
      "We migrated the company to Zoho One: Zoho CRM and Campaigns for marketing and retention, Desk for support, Books and Inventory for finance and stock across marketplaces, and Analytics dashboards giving founders a daily business snapshot across every function.",
    results: [
      "Software spend down roughly 40% versus the previous stack",
      "Support, order and purchase history now visible in one customer record",
      "Founder dashboard: sales, stock, cash position and support SLAs in one view",
    ],
  },
  {
    sector: "IT Services — Hyderabad",
    icon: "itservices",
    apps: ["Zoho Desk", "Zoho SalesIQ"],
    title: "Support SLAs met 96% of the time for a 60-person IT services firm",
    challenge:
      "Client issues arrived over email, phone and personal WhatsApp numbers. Tickets slipped through, SLA commitments in contracts were untracked, and escalations reached the founders only after clients were already frustrated.",
    solution:
      "Zoho Desk centralised all channels into one ticketing queue with client-specific SLA policies, auto-escalation rules and a self-service knowledge base. SalesIQ added live chat on their website, feeding conversations directly into Desk with full context.",
    results: [
      "SLA compliance measured for the first time — now consistently above 96%",
      "First-response time cut from hours to under 15 minutes on priority tickets",
      "Recurring issues identified via Desk reports, reducing repeat tickets by a third",
    ],
  },
  {
    sector: "Wholesale Distribution — Delhi NCR",
    icon: "distribution",
    apps: ["Zoho Books", "Zoho Inventory"],
    title: "GST-ready books and live stock across three warehouses",
    challenge:
      "An FMCG distributor with three warehouses ran billing on a legacy desktop tool and stock on registers. GST filing was a month-end scramble, stock-outs and dead stock coexisted, and receivables follow-up was ad hoc.",
    solution:
      "Zoho Books and Zoho Inventory were implemented together: multi-warehouse stock with reorder points, barcode-based inward/outward, e-invoicing and e-way bills generated in-flow, and automated payment reminders for receivables.",
    results: [
      "GST returns prepared in hours, not days — with e-invoicing built into billing",
      "Stock-outs on fast-moving SKUs reduced by half within one quarter",
      "Receivables days improved by 11 days through automated reminders",
    ],
  },
  {
    sector: "Staffing & Recruitment — Chennai",
    icon: "staffing",
    apps: ["Zoho Recruit", "Zoho People"],
    title: "Placement cycle shortened by 9 days for a specialist staffing agency",
    challenge:
      "A staffing agency placing engineering talent tracked candidates in spreadsheets and inboxes. Duplicate outreach embarrassed recruiters, client submittals were slow, and there was no data on which sourcing channels actually produced placements.",
    solution:
      "Zoho Recruit was configured with their end-to-end workflow — sourcing, screening, client submittal, interview and offer — with resume parsing, a branded careers page, and client portals for feedback. Zoho People handles onboarding for deployed consultants.",
    results: [
      "Average time-to-placement reduced by 9 days",
      "Sourcing-channel reports now drive where job ads and effort go",
      "Client submittal-to-feedback loop cut from a week to 2 days via portals",
    ],
  },
];


/* Brand-styled sector illustrations (SVG, no external assets) */
function SectorArt({ kind }) {
  const stroke = "#F7B32B";
  const soft = "rgba(255,255,255,0.55)";
  const common = {
    fill: "none",
    strokeWidth: 5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const art = {
    realestate: (
      <g {...common}>
        <path stroke={soft} d="M30 150V80l30-22 30 22v70" />
        <path stroke={stroke} d="M78 150V60l42-30 42 30v90" />
        <path stroke={soft} d="M20 150h150" />
        <rect stroke={stroke} x="105" y="98" width="14" height="16" />
        <rect stroke={soft} x="130" y="98" width="14" height="16" />
        <rect stroke={soft} x="105" y="70" width="14" height="16" />
        <rect stroke={stroke} x="130" y="70" width="14" height="16" />
        <path stroke={soft} d="M42 96h14M42 118h14" />
      </g>
    ),
    manufacturing: (
      <g {...common}>
        <path stroke={soft} d="M25 150V95l30 20V95l30 20V95l30 20v35" />
        <path stroke={soft} d="M18 150h154" />
        <circle stroke={stroke} cx="132" cy="58" r="20" />
        <circle stroke={stroke} cx="132" cy="58" r="7" />
        <path stroke={stroke} d="M132 30v-8M132 94v-8M160 58h8M96 58h8M152 38l6-6M106 84l6-6M152 78l6 6M106 32l6 6" />
      </g>
    ),
    ecommerce: (
      <g {...common}>
        <path stroke={stroke} d="M35 45h18l16 70h64l14-52H62" />
        <circle stroke={stroke} cx="78" cy="140" r="10" />
        <circle stroke={stroke} cx="122" cy="140" r="10" />
        <path stroke={soft} d="M140 32l22 12v24l-22 12-22-12V44z" />
        <path stroke={soft} d="M118 44l22 12 22-12M140 56v24" />
      </g>
    ),
    itservices: (
      <g {...common}>
        <path stroke={stroke} d="M55 95a45 45 0 0 1 90 0" />
        <rect stroke={stroke} x="45" y="92" width="20" height="32" rx="8" />
        <rect stroke={stroke} x="135" y="92" width="20" height="32" rx="8" />
        <path stroke={soft} d="M145 124v10a18 18 0 0 1-18 18h-14" />
        <rect stroke={soft} x="98" y="146" width="16" height="12" rx="5" />
      </g>
    ),
    distribution: (
      <g {...common}>
        <path stroke={soft} d="M22 150V70l40-26 40 26v80" />
        <path stroke={soft} d="M14 150h172" />
        <rect stroke={stroke} x="42" y="112" width="26" height="26" />
        <rect stroke={stroke} x="72" y="112" width="26" height="26" />
        <rect stroke={stroke} x="57" y="84" width="26" height="26" />
        <path stroke={soft} d="M128 96h44M128 116h44M128 136h30" />
      </g>
    ),
    staffing: (
      <g {...common}>
        <circle stroke={stroke} cx="76" cy="70" r="22" />
        <path stroke={stroke} d="M38 148c4-26 18-40 38-40s34 14 38 40" />
        <circle stroke={soft} cx="136" cy="96" r="24" />
        <path stroke={soft} d="M153 113l22 22" />
      </g>
    ),
  };
  return (
    <svg
      viewBox="0 0 200 170"
      className="mt-8 h-36 w-auto opacity-90"
      role="img"
      aria-hidden="true"
    >
      {art[kind]}
    </svg>
  );
}

function AssessmentCTA({ className = "" }) {
  return (
    <Link
      href="/contact"
      className={`inline-block rounded-full bg-amber px-8 py-4 text-sm font-bold text-ink shadow-lift transition hover:brightness-105 ${className}`}
    >
      Get a free assessment
    </Link>
  );
}

export default function SuccessStories() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="dots dots-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow">Success stories</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Real problems, real sectors — solved on Zoho
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            From factory floors in Pune to sales offices in Bengaluru, here is
            how Indian businesses run better after a CZone implementation.
            Wondering what this looks like for your business?
          </p>
          <div className="mt-8">
            <AssessmentCTA />
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6">
        {stories.map((s, i) => (
          <article
            key={s.title}
            className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card"
          >
            <div className="grid md:grid-cols-[1fr_1.6fr]">
              {/* Left rail */}
              <div className="relative bg-ink p-8 text-white md:p-10">
                <div className="dots-dense absolute inset-0 opacity-30" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                    {s.sector}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-snug">
                    {s.title}
                  </h2>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.apps.map((a) => (
                      <li
                        key={a}
                        className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold ring-1 ring-white/20"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                  <SectorArt kind={s.icon} />
                </div>
              </div>

              {/* Right content */}
              <div className="p-8 md:p-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  The challenge
                </h3>
                <p className="mt-2 leading-relaxed text-ink/75">{s.challenge}</p>

                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  What we did
                </h3>
                <p className="mt-2 leading-relaxed text-ink/75">{s.solution}</p>

                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  The results
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {s.results.map((r) => (
                    <li key={r} className="flex gap-3 text-sm font-medium text-ink/85">
                      <span
                        className="mt-1.5 h-2 w-2 flex-none rounded-full bg-amber"
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
        <p className="text-center text-xs text-ink/50">
          Engagements shown are representative; client identities withheld.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-royal py-20 text-white">
        <div className="dots-dense absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your business could be the next story here
          </h2>
          <p className="mt-4 text-white/85">
            Tell us how you work today. We&apos;ll assess where Zoho can remove
            friction, what it would cost, and what results to expect — free,
            and with no obligation.
          </p>
          <AssessmentCTA className="mt-8" />
        </div>
      </section>
    </>
  );
}
