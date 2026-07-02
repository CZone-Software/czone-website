import "./globals.css";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
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
      </body>
    </html>
  );
}
