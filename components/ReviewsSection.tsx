"use client";

import { motion } from "framer-motion";
import { MessageSquare, Heart } from "lucide-react";

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      style={{
        background: "var(--bg-light)", // Warm off-white background
        padding: "64px 0",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCurve }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}
          >
            <span style={{ width: "16px", height: "1.5px", background: "#F5C518", display: "block" }} />
            <span className="section-eyebrow" style={{ margin: 0 }}>Customer Experiences</span>
          </motion.div>

          <h2
            className="section-title"
            style={{
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            Real Journeys. Real Feedback.
          </h2>
        </div>

        {/* Clean testomonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16, ease: easeCurve }}
          style={{
            maxWidth: "580px",
            margin: "0 auto",
            background: "var(--surface-light)",
            border: "1px solid var(--border-light)",
            borderRadius: "8px",
            padding: "32px 24px",
            textAlign: "center",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.01)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Accent line */}
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "3px",
              background: "#F5C518",
            }}
          />

          {/* Testimonial icon with slow restrained breathing animation */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(245, 197, 24, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5C518",
              margin: "0 auto 20px",
            }}
          >
            <MessageSquare size={18} />
          </motion.div>

          <h3
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-manrope)",
              fontSize: "1.05rem",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Genuine Feedback Coming Soon
          </h3>

          <p
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.98rem",
              lineHeight: 1.6,
              maxWidth: "420px",
              margin: "0 auto 28px",
            }}
          >
            We believe in complete transparency. We choose not to publish fabricated reviews or mock ratings. Real travel testimonials from verified riders will be displayed here as we gather them.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <a
              href="https://wa.me/918072000428?text=Hi%20VA%20Cabs%2C%20I%20recently%20used%20your%20service%20and%20would%20like%20to%20share%20my%20feedback."
              target="_blank"
              rel="noopener noreferrer"
              className="rev-cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                background: "#151515",
                color: "#ffffff",
                fontFamily: "var(--font-inter)",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
            >
              <Heart size={14} style={{ color: "#F5C518", fill: "#F5C518" }} />
              Share Your Experience
            </a>
             <span
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
              }}
            >
              Send your honest feedback directly to our team via WhatsApp
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .rev-cta-btn:hover {
          background: #F5C518 !important;
          color: #000000 !important;
        }
        @media (max-width: 480px) {
          .rev-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
