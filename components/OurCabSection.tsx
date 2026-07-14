"use client";

import { motion } from "framer-motion";
import { Info, MessageCircle } from "lucide-react";

// Coordinated custom side-profile SVG vehicle icon family
type SVGIconProps = { size?: number; className?: string };

function CompactIcon({ size = 24, className }: SVGIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 15h3.5a2.5 2.5 0 0 1 5 0h4a2.5 2.5 0 0 1 5 0h2.5v-2.5a1 1 0 0 0-.3-.7L18 8.5A1.5 1.5 0 0 0 16.8 8H10L6.5 11H3a1 1 0 0 0-1 1z" />
      <circle cx="8" cy="15" r="2" />
      <circle cx="17" cy="15" r="2" />
    </svg>
  );
}

function SedanIcon({ size = 24, className }: SVGIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 15h2.5a2.5 2.5 0 0 1 5 0h6a2.5 2.5 0 0 1 5 0h2.5v-2.5h-3L17 8.5H10L7 12.5H3a1 1 0 0 0-1 1z" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="18" cy="15" r="2" />
    </svg>
  );
}

function SUVIcon({ size = 24, className }: SVGIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 15h2.5a2.5 2.5 0 0 1 5 0h6.5a2.5 2.5 0 0 1 5 0h2v-4.5l-2-4H9.5L7.5 10.5H3v3.5z" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="18.5" cy="15" r="2" />
    </svg>
  );
}

function VanIcon({ size = 24, className }: SVGIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1 15h1.5a2.5 2.5 0 0 1 5 0h8.5a2.5 2.5 0 0 1 5 0h2v-8H7.5L5 11H2v3z" />
      <circle cx="5" cy="15" r="2" />
      <circle cx="18.5" cy="15" r="2" />
      <path d="M8 9.5h3.5v2H8zM13 9.5h4.5v2H13z" />
    </svg>
  );
}

type VehicleCategory = {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  desc: string;
  useCase: string;
};

const categories: VehicleCategory[] = [
  {
    Icon: CompactIcon,
    label: "Hatchback",
    desc: "Compact and efficient. Perfect for solo travellers, couples, or everyday short-distance travel with light luggage.",
    useCase: "Short trips & daily travel",
  },
  {
    Icon: SedanIcon,
    label: "Sedan",
    desc: "Comfortable and classic. A suitable choice for planned airport journeys, business trips, and everyday travel.",
    useCase: "Airport journeys & everyday travel",
  },
  {
    Icon: SUVIcon,
    label: "SUV",
    desc: "Spacious and comfortable. Ideal for family outings, small groups, or trips requiring extra luggage space.",
    useCase: "Family travel & outstation tours",
  },
  {
    Icon: VanIcon,
    label: "Larger Vehicles",
    desc: "Ample room for larger group bookings, special events, pilgrimage tours, or long-distance family travel.",
    useCase: "Group tours & events",
  },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function VehiclesSection() {
  return (
    <section
      id="our-cab"
      style={{
        background: "var(--bg-light)", // Warm off-white background matching visual system
        padding: "84px 0",
        position: "relative",
      }}
    >
      <div className="site-container vh-site-container">
        {/* Header */}
        <div style={{ marginBottom: "52px" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCurve }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}
          >
            <span style={{ width: "16px", height: "1.5px", background: "#F5C518", display: "block" }} />
            <span className="section-eyebrow" style={{ margin: 0 }}>Vehicle Options</span>
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
            A Ride for Every Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: easeCurve }}
            className="section-body"
            style={{
              maxWidth: "560px",
              color: "var(--text-secondary)",
            }}
          >
            Tell us about your trip and plan your two-way travel directly with us. Cab service is available anytime for planned travel and return trips.
          </motion.p>
        </div>

        {/* Categories Strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "36px",
          }}
          className="vh-grid"
        >
          {categories.map(({ Icon, label, desc, useCase }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeCurve } },
              }}
              className="vh-card"
              style={{
                background: "var(--surface-light)",
                border: "1px solid var(--border-light)",
                borderRadius: "8px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.01)",
                transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="vh-icon-box">
                <Icon size={20} className="vh-icon" />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                {label}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                {desc}
              </p>

              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#888888",
                  borderTop: "1px solid #f2f2f7",
                  paddingTop: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {useCase}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrated Info strip & Discuss Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "20px 24px",
            borderRadius: "8px",
            background: "var(--surface-light)",
            border: "1px solid var(--border-light)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)",
          }}
          className="vh-footer"
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
            <Info size={18} style={{ color: "#F5C518", flexShrink: 0, marginTop: "2px" }} />
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, fontFamily: "var(--font-inter)" }}>
              <strong>Notice:</strong> Vehicle type arrangement is based on travel requirements. Speak with us directly to plan your specific trip.
            </p>
          </div>

          <a
            href="https://wa.me/919283455152?text=Hi%20VA%20Cabs%2C%20I%20would%20like%20to%20enquire%20about%20a%20vehicle%20booking."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "#F5C518",
              color: "#000000",
              fontFamily: "var(--font-inter)",
              fontSize: "0.9rem",
              fontWeight: 700,
              borderRadius: "6px",
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            className="vh-cta-btn hover-shine"
          >
            <MessageCircle size={16} />
            Discuss Booking
          </a>
        </motion.div>
      </div>

      <style>{`
        .vh-card:hover {
          transform: translateY(-3px);
          border-color: rgba(245, 197, 24, 0.4) !important;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04) !important;
        }

        .vh-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(245, 197, 24, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5C518;
          margin-bottom: 20px;
          transition: all 0.25s ease;
        }
        .vh-card:hover .vh-icon-box {
          background: #F5C518;
          color: #ffffff;
        }
        .vh-icon {
          transition: transform 0.25s ease;
        }
        .vh-card:hover .vh-icon {
          transform: scale(1.03);
        }

        .vh-cta-btn:hover {
          background: #ffd23f;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 16px rgba(245, 197, 24, 0.3);
        }
        .vh-cta-btn:active {
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

        @media (max-width: 1024px) {
          .vh-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
        @media (max-width: 640px) {
          .vh-grid { grid-template-columns: 1fr !important; }
          .vh-footer {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
          }
          .vh-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (min-width: 1600px) {
          .vh-site-container { max-width: 1520px !important; }
          .vh-grid { gap: 32px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .vh-card:hover, .vh-cta-btn:hover {
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

