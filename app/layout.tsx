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
  metadataBase: new URL("https://va-cabs.pages.dev/"),
  title: "VA Cabs | Cab Service in Thirumazhisai & Chennai",
  description:
    "Book direct cab rides with VA Cabs in Thirumazhisai and Chennai. We provide reliable local travel, airport transfers, planned journeys, and outstation trips. Call or WhatsApp +91 80720 00428 to book.",
  keywords:
    "VA Cabs, cab service Thirumazhisai, taxi Chennai, direct cab booking, airport cab Chennai, local taxi Thirumazhisai",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://va-cabs.pages.dev/",
    siteName: "VA Cabs",
    title: "VA Cabs | Cab Service in Thirumazhisai & Chennai",
    description:
      "Book direct cab rides with VA Cabs in Thirumazhisai and Chennai. We provide reliable local travel, airport transfers, planned journeys, and outstation trips. Call or WhatsApp +91 80720 00428 to book.",
  },
  twitter: {
    card: "summary",
    title: "VA Cabs | Cab Service in Thirumazhisai & Chennai",
    description:
      "Book direct cab rides with VA Cabs in Thirumazhisai and Chennai. We provide reliable local travel, airport transfers, planned journeys, and outstation trips. Call or WhatsApp +91 80720 00428 to book.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "VA Cabs",
  "description": "Direct-booking cab/taxi service in Thirumazhisai, Chennai. Offering local travel, airport transfers, planned journeys, and outstation trips.",
  "url": "https://va-cabs.pages.dev/",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VA Cabs",
    "image": "https://va-cabs.pages.dev/va-cabs-logo.png",
    "telephone": "+91 80720 00428",
    "url": "https://va-cabs.pages.dev/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thirumazhisai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Thirumazhisai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Chennai"
    }
  ],
  "serviceType": "direct-booking cab/taxi service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "VA Cabs Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Travel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Travel/Transfers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Planned Journeys"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outstation Trips"
        }
      }
    ]
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
