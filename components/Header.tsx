"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const H = 90; // Premium header height (88px–96px)
const PHONE = "+919283455152";
const PHONE_DISPLAY = "+91 80720 00428";
const WA_LINK = `https://wa.me/918072000428?text=Hi%20VA%20Cabs%2C%20I%20would%20like%20to%20book%20a%20cab.`;

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why VA Cabs", href: "#why" },
  { label: "Vehicles", href: "#our-cab" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ─── Sticky Light Header ───────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 200,
          height: `${H}px`,
          background: "#ffffff",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(0,0,0,0.03)",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0, 0, 0, 0.03)"
            : "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: "24px",
          }}
        >
          {/* Logo — placed naturally, blends with the white header background */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); go("#hero"); }}
            style={{ flexShrink: 0, lineHeight: 0, textDecoration: "none" }}
            aria-label="VA Cabs home"
          >
            <Image
              src="/va-cabs-logo-header.png"
              alt="VA Cabs Logo"
              width={135}
              height={101}
              style={{
                objectFit: "contain",
                display: "block",
                height: "auto",
              }}
              unoptimized
              priority
            />
          </a>

          {/* Centered navigation menu with animated hover underlines */}
          <nav className="hdr-nav">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="hdr-link-btn"
                style={{
                  position: "relative",
                  background: "none",
                  border: "none",
                  color: "#151515",
                  fontFamily: "var(--font-manrope)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "8px 16px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {l.label}
                <span className="hdr-underline" />
              </button>
            ))}
          </nav>

          {/* Call and WhatsApp CTA section */}
          <div className="hdr-ctas">
            <a
              href={`tel:${PHONE}`}
              className="hdr-call"
            >
              <Phone size={14} />
              Call Us
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-wa"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="hdr-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "#151515",
              cursor: "pointer",
              padding: "6px",
              display: "none",
              marginLeft: "auto",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drop down menu */}
      <div
        className="hdr-mobile-menu"
        style={{
          maxHeight: menuOpen ? "500px" : "0",
        }}
      >
        <div style={{ padding: "8px 24px 24px" }}>
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                color: "#151515",
                fontFamily: "var(--font-manrope)",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 0",
                cursor: "pointer",
              }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
            <a
              href={`tel:${PHONE}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "12px", borderRadius: "6px",
                border: "1.5px solid rgba(0,0,0,0.15)", color: "#151515",
                fontFamily: "var(--font-inter)", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
              }}
            >
              <Phone size={15} /> Call VA Cabs
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "12px", borderRadius: "6px",
                background: "#F5C518", color: "#000",
                fontFamily: "var(--font-inter)", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
              }}
            >
              <MessageCircle size={15} /> WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      {/* Main spacer to reserve height for sticky header */}
      <div style={{ height: `${H}px` }} />

      <style>{`
        .hdr-nav {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .hdr-link-btn:hover {
          color: #F5C518 !important;
        }

        /* Underline draw animation from left to right on hover */
        .hdr-underline {
          position: absolute;
          bottom: 2px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: #F5C518;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hdr-link-btn:hover .hdr-underline {
          transform: scaleX(1);
        }

        .hdr-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .hdr-call {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 6px;
          border: none;
          background: #151515;
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          white-space: nowrap;
        }
        .hdr-call:hover {
          background: #2a2a2a;
          transform: translateY(-1px);
        }

        .hdr-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 6px;
          background: #F5C518;
          color: #000;
          font-family: var(--font-inter);
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          white-space: nowrap;
        }
        .hdr-wa:hover {
          background: #ffd23f;
          transform: translateY(-1px);
        }

        .hdr-mobile-menu {
          position: fixed;
          top: ${H}px;
          left: 0; right: 0;
          z-index: 199;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: #ffffff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }



        @media (max-width: 980px) {
          .hdr-nav { display: none !important; }
          .hdr-ctas { display: none !important; }
          .hdr-burger { display: flex !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          header, .hdr-mobile-menu {
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
          .hdr-underline {
            display: none !important;
          }
          .hdr-call:hover, .hdr-wa:hover {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}
