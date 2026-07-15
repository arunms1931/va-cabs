"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why VA Cabs", href: "#why" },
  { label: "Vehicles", href: "#our-cab" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  { label: "Local Cab", href: "#services" },
  { label: "Hourly Packages", href: "#services" },
  { label: "Full-Day Cab", href: "#services" },
  { label: "Airport Two-Way Travel", href: "#services" },
  { label: "Outstation Travel", href: "#services" },
];

const PHONE = "+919283455152";
const PHONE_DISPLAY = "+91 92834 55152";
const WA_LINK = `https://wa.me/918072000428?text=Hi%20VA%20Cabs%2C%20I%20would%20like%20to%20book%20a%20cab.`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="site-container footer-site-container" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        {/* Top row: 4 columns */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "40px", marginBottom: "56px" }}
          className="footer-grid"
        >
          <div>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ display: "inline-block", marginBottom: "16px", textDecoration: "none" }}
              aria-label="VA Cabs home"
            >
              <Image
                src="/va-cabs-logo.png"
                alt="VA Cabs Logo"
                width={112}
                height={112}
                style={{
                  objectFit: "contain",
                  display: "block",
                }}
                className="footer-logo-img"
                unoptimized
              />
            </a>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "20px", fontFamily: "var(--font-inter)" }}>
              Direct cab booking for local, airport and outstation travel.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{ width: "36px", height: "36px", borderRadius: "6px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}
                className="footer-social-icon"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`tel:${PHONE}`}
                aria-label="Phone"
                style={{ width: "36px", height: "36px", borderRadius: "6px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}
                className="footer-social-icon"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: "#F5C518", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px", fontFamily: "var(--font-manrope)" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link"
                    style={{
                      position: "relative",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.88rem",
                      textDecoration: "none",
                      paddingBottom: "2px",
                      display: "inline-block",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {link.label}
                    <span className="footer-underline" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ color: "#F5C518", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px", fontFamily: "var(--font-manrope)" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link"
                    style={{
                      position: "relative",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.88rem",
                      textDecoration: "none",
                      paddingBottom: "2px",
                      display: "inline-block",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {link.label}
                    <span className="footer-underline" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 style={{ color: "#F5C518", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px", fontFamily: "var(--font-manrope)" }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontFamily: "var(--font-inter)" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginBottom: "2px" }}>Call / WhatsApp</p>
                <a
                  href={`tel:${PHONE}`}
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s ease", fontWeight: 500 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F5C518")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginBottom: "2px" }}>Based Near</p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", fontWeight: 500 }}>Thirumazhisai, Chennai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", fontFamily: "var(--font-inter)" }}>
            © {year} VA Cabs. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem", fontWeight: 500, fontFamily: "var(--font-inter)" }}>
            Direct Rides. Fair Fares.
          </p>
        </div>
      </div>

      <style>{`
        .footer-logo-img {
          width: 112px !important;
          height: 112px !important;
        }
        @media (max-width: 768px) {
          .footer-logo-img {
            width: 98px !important;
            height: 98px !important;
          }
        }

        .footer-social-icon:hover {
          background: #F5C518 !important;
          color: #000000 !important;
          border-color: #F5C518 !important;
          transform: translateY(-1px);
        }

        /* Animated underline hover drawing from left to right */
        .footer-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #F5C518;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .footer-link:hover .footer-underline {
          transform: scaleX(1);
        }
        .footer-link:hover {
          color: #F5C518 !important;
        }

        @media (min-width: 1200px) {
          .footer-site-container { max-width: 1520px !important; }
          .footer-grid { gap: 80px !important; }
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; margin-bottom: 8px; }
          .footer-grid > div:last-child { grid-column: 1 / -1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-underline {
            display: none !important;
          }
          .footer-social-icon:hover {
            transform: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
