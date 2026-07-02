import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "CZone Software is an Authorized Zoho Partner focused on implementations that people actually adopt.",
};

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="dots dots-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow">About us</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Professional, approachable, and fluent in Zoho
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            CZone Software exists because too many businesses buy great
            software and never see the value. Licenses get purchased, a CRM
            gets half-configured, the team quietly goes back to spreadsheets —
            and the software gets the blame.
          </p>
          <p>
            We do it differently. As an <strong>Authorized Zoho Partner</strong>,
            we combine reselling with hands-on implementation, so the people
            advising you on what to buy are the same people accountable for
            making it work. We start with your processes, not the product
            brochure, and we measure success by adoption — whether your team is
            genuinely working in the system six months after launch.
          </p>
          <p>
            {/* TODO: replace with your real founding story, location and team details */}
            Founded by consultants with years of experience across the Zoho
            ecosystem, headquartered in Indiranagar, Bengaluru, we work with growing businesses across industries — from
            first CRM rollouts to full Zoho One transformations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            ["Partner", "Authorized Zoho Partner"],
            ["Focus", "Implementation & adoption"],
            ["Coverage", "Full Zoho ecosystem, 55+ apps"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-tint p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">{k}</p>
              <p className="mt-2 font-display font-bold">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-royal px-8 py-4 text-sm font-semibold text-white shadow-lift transition hover:bg-deepblue"
          >
            Let&apos;s have a chat
          </Link>
        </div>
      </section>
    </>
  );
}
