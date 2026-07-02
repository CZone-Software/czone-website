import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/czonesoftware" },
  { label: "Facebook", href: "https://www.facebook.com/czonesoftware" },
  { label: "X", href: "https://x.com/czonesoftware" },
  { label: "YouTube", href: "https://www.youtube.com/@czonesoftware" },
  { label: "Instagram", href: "https://www.instagram.com/czonesoftware" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="dots-dense dots-fade h-3 w-full opacity-60" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-white p-1.5">
              <Image src="/czone-mark.png" alt="" width={47} height={36} className="h-8 w-auto" />
            </span>
            <span className="font-display text-lg font-bold">CZone Software</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Authorized Zoho Partner for reselling, implementation, customisation
            and support.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber/60 px-3 py-1.5 text-xs font-semibold text-amber">
            Authorized Zoho Partner
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/80 transition hover:text-amber">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Zoho Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Zoho One</li>
            <li>Zoho CRM</li>
            <li>Zoho Books &amp; Finance</li>
            <li>Zoho Desk</li>
            <li>Zoho People &amp; Recruit</li>
            <li>Zoho Analytics &amp; Creator</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Reach out</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:zoho@czonesoftware.com" className="text-white/80 hover:text-amber">
                zoho@czonesoftware.com
              </a>
            </li>
            <li>
              <a href="mailto:contact@czonesoftware.com" className="text-white/80 hover:text-amber">
                contact@czonesoftware.com
              </a>
            </li>
            <li>
              <a href="tel:+917386031488" className="text-white/80 hover:text-amber">
                +91 73860 31488
              </a>
            </li>
            <li className="pt-1 leading-relaxed text-white/60">
              71, 6th Main Rd, HAL 2nd Stage,
              <br />
              Indiranagar, Bengaluru,
              <br />
              Karnataka 560008, India
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/50">Socials</h3>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition hover:text-amber"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} CZone Software. All rights reserved. Zoho and Zoho product
        names are trademarks of Zoho Corporation.
      </div>
    </footer>
  );
}
