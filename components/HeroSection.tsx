"use client";

import { motion } from "framer-motion";
import { Shield, UserCheck, CheckCircle, MessageCircle, Phone, Headphones } from "lucide-react";

const PHONE = "+919283455152";
const WA_LINK = `https://wa.me/918072000428?text=Hi%20VA%20Cabs%2C%20I%20would%20like%20to%20book%20a%20cab.`;
const HERO_IMAGE = "/chennai-taxi-hero.png";

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#060606",
      }}
    >
      {/* ══ BACKGROUND PHOTO ══════════════════════════════════════ */}
      <motion.div
        className="hero-bg-image"
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: easeCurve }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* ══ OVERLAYS ══════════════════════════════════════════════ */}
      {/* 1. Left-to-right gradient to protect text on left, leaving taxi clear on right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 32%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.08) 80%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* 2. Bottom gradient vignette transitioning into the booking panel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.3) 30%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* 3. Very subtle dark film layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.15)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ══ CONTENT ═══════════════════════════════════════════════ */}
      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "var(--hero-inner-width, 1300px)", // Uses CSS variable for large-desktop margin width expansion
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="hero-content">
          {/* Eyebrow: PERSONAL CAB SERVICE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeCurve }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
          >
            <span style={{ width: "24px", height: "2px", background: "#F5C518", display: "block" }} />
            <span
              style={{
                color: "#F5C518",
                fontSize: "var(--hero-eyebrow-size, 11px)",
                fontWeight: 700,
                letterSpacing: "var(--hero-eyebrow-spacing, 2.5px)",
                textTransform: "uppercase",
                fontFamily: "var(--font-manrope)",
              }}
            >
              Personal Cab Service
            </span>
          </motion.div>

          {/* Heading: Direct Rides. Fair Fares. */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.03em",
            }}
          >
            <motion.span
              style={{ display: "block" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeCurve }}
            >
              Direct Rides.
            </motion.span>
            <motion.span
              style={{ display: "block", color: "#F5C518" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: easeCurve }}
            >
              Fair Fares.
            </motion.span>
          </h1>

          {/* Supporting copy */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: easeCurve }}
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "var(--hero-sub-size, 1.05rem)",
              lineHeight: 1.6,
              marginBottom: "38px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Reliable cab service for local travel, planned journeys and outstation trips — booked directly with VA Cabs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.36, ease: easeCurve }}
            className="hero-ctas"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-wa hover-shine"
            >
              <MessageCircle size={18} />
              Plan Your Trip
            </a>
            <a
              href={`tel:${PHONE}`}
              className="hero-btn-call"
            >
              <Phone size={18} />
              Call VA Cabs
            </a>
          </motion.div>

          {/* Minimal horizontal trust indicators */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.48,
                },
              },
            }}
            className="hero-trust"
          >
            {[
              { icon: UserCheck, text: "Direct Booking" },
              { icon: CheckCircle, text: "Reliable Travel" },
              { icon: Headphones, text: "Human Support" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={text} className="hero-trust-wrapper">
                {i > 0 && <span className="hero-trust-sep" />}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="hero-trust-item"
                >
                  <Icon size={15} style={{ color: "#F5C518", strokeWidth: 2, flexShrink: 0 }} />
                  <span style={{ color: "#fff", fontSize: "var(--hero-trust-size, 0.85rem)", fontWeight: 500, fontFamily: "var(--font-inter)", whiteSpace: "nowrap" }}>
                    {text}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          height: 750px;
          --hero-eyebrow-size: 11px;
          --hero-eyebrow-spacing: 2.5px;
          --hero-sub-size: 1.05rem;
          --hero-trust-size: 0.85rem;
          --hero-trust-icon-size: 15px;
          --hero-btn-icon-size: 18px;
        }
        .hero-inner   { height: 100%; padding-top: 90px; padding-bottom: 90px; }

        .hero-content {
          width: 100%;
          max-width: 540px;
          text-align: left;
        }

        .hero-h1 {
          font-size: clamp(2.75rem, 5vw, 4.2rem); /* approx 64-72px on desktop */
        }

        .hero-trust-item svg {
          width: var(--hero-trust-icon-size, 15px) !important;
          height: var(--hero-trust-icon-size, 15px) !important;
        }

        .hero-ctas svg {
          width: var(--hero-btn-icon-size, 18px) !important;
          height: var(--hero-btn-icon-size, 18px) !important;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-btn-wa {
          position: relative;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 30px; border-radius: 6px;
          background: #F5C518; color: #000;
          font-family: var(--font-inter); font-size: 0.95rem; font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(245,197,24,0.2);
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
          overflow: hidden;
        }
        .hero-btn-wa:hover {
          background: #ffd23f;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 24px rgba(245,197,24,0.4);
        }
        .hero-btn-wa:active {
          transform: translateY(0) scale(0.98);
        }

        /* Diagonal hover sweep/shine effect */
        .hover-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(30deg);
          transition: none;
          opacity: 0;
        }
        .hover-shine:hover::after {
          left: 150%;
          opacity: 1;
          transition: all 0.55s ease-out;
        }

        .hero-btn-call {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px; border-radius: 6px;
          background: rgba(0,0,0,0.5);
          border: 1.5px solid rgba(255,255,255,0.25);
          color: #fff;
          font-family: var(--font-inter); font-size: 0.95rem; font-weight: 600;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .hero-btn-call:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px) scale(1.02);
        }
        .hero-btn-call:active {
          transform: translateY(0) scale(0.98);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-trust-wrapper {
          display: flex;
          align-items: center;
        }
        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-trust-sep {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.25);
          display: inline-block;
          margin-right: 16px;
        }

        /* Large desktop — complete hero content block scaling and left shift */
        @media (min-width: 1600px) {
          .hero-section {
            --hero-eyebrow-size: 12px;
            --hero-eyebrow-spacing: 3px;
            --hero-sub-size: 1.125rem; /* ~18px */
            --hero-trust-size: 0.95rem; /* ~15px */
            --hero-trust-icon-size: 17px;
            --hero-btn-icon-size: 20px;
          }
          .hero-inner {
            --hero-inner-width: 1520px !important;
          }
          .hero-content {
            margin-left: -32px !important; /* Controlled left shift of 32px */
            max-width: 660px !important;   /* Proportionally wider content block to prevent awkward H1/text wraps */
          }
          .hero-h1 {
            font-size: 5rem !important; /* approx 80px */
          }
          .hero-btn-wa {
            padding: 16px 36px !important;
            font-size: 1.05rem !important;
          }
          .hero-btn-call {
            padding: 15px 36px !important;
            font-size: 1.05rem !important;
          }
          .hero-trust {
            gap: 20px !important;
          }
          .hero-trust-sep {
            margin-right: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section { height: auto !important; min-height: 100svh; }
          .hero-inner { padding-top: 130px !important; padding-bottom: 60px !important; }
          .hero-h1 { font-size: 2.5rem !important; }
          .hero-trust { flex-direction: column; align-items: flex-start; gap: 12px; }
          .hero-trust-sep { display: none !important; }
          .hero-bg-image {
            background-position: 72% 45% !important;
            background-size: cover !important;
          }
          /* Mobile dark filter to guarantee text readability */
          .hero-section > div:nth-child(2) {
            background: linear-gradient(180deg,
              rgba(0,0,0,0.96) 0%,
              rgba(0,0,0,0.85) 60%,
              rgba(0,0,0,0.7) 100%
            ) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-btn-wa, .hero-btn-call { width: 100%; justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-image, .hero-h1 span, .hero-sub, .hero-ctas, .hero-trust-item {
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
          .hero-btn-wa:hover, .hero-btn-call:hover {
            transform: none !important;
          }
          .hover-shine::after {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

