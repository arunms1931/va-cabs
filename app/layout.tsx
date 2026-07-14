import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VA Cabs — Direct Rides. Fair Fares. | Thirumazhisai, Chennai",
  description:
    "Book a direct cab ride with VA Cabs in Thirumazhisai and Chennai. Direct booking built on years of local driving experience and route knowledge. Serving airport, railway station, outstation and local trips. Call or WhatsApp +91 92834 55152.",
  keywords:
    "VA Cabs, cab service Thirumazhisai, taxi Chennai, direct cab booking, airport cab Chennai, local taxi Thirumazhisai",
  openGraph: {
    title: "VA Cabs — Direct Rides. Fair Fares.",
    description:
      "Book a direct cab in Thirumazhisai, Chennai. Direct booking, fair fares, built on years of local driving experience and route knowledge. WhatsApp or call now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FAF9F6" />
      </head>
      <body>{children}</body>
    </html>
  );
}
