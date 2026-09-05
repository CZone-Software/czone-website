"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/services", label: "Zoho Services" },
  { href: "/web-services", label: "Web & Digital" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="CZone Software home">
          <Image
            src="/czone-mark.png"
            alt="CZone Software"
            width={52}
            height={40}
            priority
            className="h-9 w-auto"
          />
          <span className="font-display text-lg font-bold leading-none tracking-tight">
            CZone <span className="text-royal">Software</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition hover:text-royal"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-deepblue"
          >
            Talk to us
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-white px-4 pb-4 pt-2 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-sm font-medium text-ink/80 hover:bg-tint"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-royal px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Talk to us
          </Link>
        </nav>
      )}
    </header>
  );
}
