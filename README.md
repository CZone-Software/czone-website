# CZone Software — Website

Marketing website for **czonesoftware.com**, built with Next.js 14 (App Router) + Tailwind CSS, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js. No configuration needed.
3. Click **Deploy**.
4. In the Vercel project → **Settings → Domains**, add `czonesoftware.com` and `www.czonesoftware.com`, then update your DNS records as Vercel instructs (an `A` record to `76.76.21.21` and a `CNAME` for `www` to `cname.vercel-dns.com`).

## Before going live — placeholder checklist

Search the codebase for `TODO` to find every placeholder:

- [ ] **Testimonial** — swap the placeholder quote on the homepage (`app/page.jsx`) for a real client quote
- [ ] **About story** — replace the founding-story paragraph in `app/about/page.jsx` with your real story, location and team
- [ ] **Contact form** — the form currently opens the visitor's email client. Recommended upgrade: embed a **Zoho Form** or a **Zoho CRM Webform** so enquiries land directly in your CRM (very on-brand for a Zoho partner). Replace the `<form>` in `app/contact/page.jsx` with your embed code.
- [ ] **Favicon** — add an `app/icon.png` (Next.js picks it up automatically); `public/czone-mark.png` is a ready-made square crop of the CZ mark
- [ ] **Analytics** — consider Zoho PageSense or Vercel Analytics

## Structure

```
app/
  layout.jsx        # fonts, metadata, header/footer shell
  page.jsx          # homepage
  services/page.jsx
  about/page.jsx
  contact/page.jsx
components/
  Header.jsx
  Footer.jsx
public/
  czone-logo.png    # full logo
  czone-mark.png    # CZ mark only (for favicon/social)
```

## Brand tokens

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#14265A` | headings, footer background |
| `royal` | `#1A56D6` | primary actions, links |
| `deepblue` | `#123FA8` | hover state |
| `tint` | `#EDF3FE` | soft panels |
| `amber` | `#F7B32B` | partner badge, highlights (use sparingly) |

Display font: **Bricolage Grotesque** · Body font: **Public Sans** (both via `next/font`).
The dotted-halftone pattern (`.dots` / `.dots-dense` in `app/globals.css`) is the site's signature, echoing the texture in the CZ logo mark.
