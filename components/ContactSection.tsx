"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+919283455152";
const WA_LINK = `https://wa.me/918072000428?text=Hi%20VA%20Cabs%2C%20I%20would%20like%20to%20book%20a%20cab.`;

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "84px 0",
        background: "var(--surface-light)", // Consistent light visual theme
        borderTop: "1px solid var(--border-light)",
      }}
    >
      {/* Restrained radial yellow accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(245, 197, 24, 0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", textAlign: "center" }}>
        {/* Content Box */}
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCurve }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}
          >
            <span style={{ width: "16px", height: "1.5px", background: "#F5C518", display: "block" }} />
            <span className="section-eyebrow" style={{ margin: 0 }}>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeCurve }}
            className="section-title"
            style={{
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            Ready for Your Next Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: easeCurve }}
            className="section-body"
            style={{
              color: "var(--text-secondary)",
              marginBottom: "40px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Tell us where you&apos;re travelling. We&apos;ll discuss your trip and help arrange the right ride.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24, ease: easeCurve }}
            className="contact-ctas"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cnt-wa-btn hover-shine"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="cnt-call-btn"
            >
              <Phone size={18} />
              Call VA Cabs
            </a>
          </motion.div>

          {/* Small Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32, ease: easeCurve }}
            style={{
              color: "#888888",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.2px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Direct booking &bull; Human support &bull; Cab service available anytime
          </motion.p>
        </div>
      </div>

      <style>{`
        .cnt-wa-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          border-radius: 6px;
          background: #F5C518;
          color: #000000;
          font-family: var(--font-inter);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 12px rgba(245, 197, 24, 0.2);
          overflow: hidden;
        }
        .cnt-wa-btn:hover {
          background: #ffd23f;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(245, 197, 24, 0.35);
        }
        .cnt-wa-btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* Shine hover sweep */
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

        .cnt-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          border-radius: 6px;
          background: #151515;
          border: none;
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cnt-call-btn:hover {
          background: #2a2a2a;
          transform: translateY(-2px) scale(1.02);
        }
        .cnt-call-btn:active {
          transform: translateY(0) scale(0.98);
        }

        @media (max-width: 480px) {
          .cnt-wa-btn, .cnt-call-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cnt-wa-btn:hover, .cnt-call-btn:hover {
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
