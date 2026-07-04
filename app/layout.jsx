import "./globals.css";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://czonesoftware.com"),
  title: {
    default: "CZone Software | Authorized Zoho Partner — Reselling & Implementation",
    template: "%s | CZone Software",
  },
  description:
    "CZone Software is an Authorized Zoho Partner helping businesses choose, license, implement and adopt the Zoho ecosystem — from Zoho One and CRM to Books, Desk and custom integrations.",
  openGraph: {
    title: "CZone Software | Authorized Zoho Partner",
    description:
      "Zoho reselling, implementation, customisation and support — done right the first time.",
    url: "https://czonesoftware.com",
    siteName: "CZone Software",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Zoho SalesIQ live chat */}
        <Script id="zsiq-init" strategy="afterInteractive">
          {`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          strategy="afterInteractive"
          src="https://salesiq.zohopublic.in/widget?wc=siq6e6621bac561027cba47768f37309dc763a3ed29a6905e1068d64603a0315473b8095fbf87b37ad1b4f80ee8f0ac7f03"
        />
      </body>
    </html>
  );
}
