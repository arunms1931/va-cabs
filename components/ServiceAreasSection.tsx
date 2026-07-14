"use client";

import { motion } from "framer-motion";
import { Navigation, MapPin, Globe } from "lucide-react";

const coverage = [
  {
    Icon: MapPin,
    title: "Local Starting Area",
    desc: "Direct passenger pickups from Thirumazhisai, Nazarathpet, Poonamallee, and surrounding residential suburbs.",
  },
  {
    Icon: Navigation,
    title: "Chennai Suburbs & Airport",
    desc: "Comfortable two-way travel to Chennai International Airport, railway stations, business hubs, and city suburbs, with return travel in the same cab.",
  },
  {
    Icon: Globe,
    title: "Outstation Trips",
    desc: "Long-distance journeys to other districts, towns, pilgrimage temples, and holiday destinations across Tamil Nadu.",
  },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function ServiceAreasSection() {
  return (
    <section
      id="areas"
      style={{
        background: "var(--surface-light)", // Light surface theme
        padding: "84px 0", // Reduced padding by ~24% to optimize vertical whitespace
        position: "relative",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        overflow: "hidden",
      }}
    >
      <div className="site-container areas-site-container">
        <div className="areas-split-layout">
          {/* LEFT SIDE: Heading & Categories */}
          <div className="areas-left">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "16px", height: "1.5px", background: "#F5C518", display: "block" }} />
              <span className="section-eyebrow" style={{ margin: 0 }}>Service Coverage</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeCurve }}
              className="section-title"
              style={{
                marginBottom: "16px",
                color: "var(--text-primary)",
              }}
            >
              Wherever the Journey Takes You
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: easeCurve }}
              className="section-body"
              style={{
                maxWidth: "480px",
                color: "var(--text-secondary)",
                marginBottom: "40px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Serving local travel, Chennai city journeys, planned airport and railway station trips, and outstation travel across Tamil Nadu.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {coverage.map(({ Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeCurve } },
                  }}
                  style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(245, 197, 24, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#F5C518",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-manrope)",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        color: "var(--text-secondary)",
                        maxWidth: "400px",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Premium SVG map route line drawing */}
          <div className="areas-right" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="route-map-box">
              <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                {/* 1. Central Starting Node (appears first) */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: easeCurve }}
                  style={{ originX: "160px", originY: "180px" }}
                >
                  <circle cx="160" cy="180" r="12" fill="rgba(245, 197, 24, 0.15)" />
                  <circle cx="160" cy="180" r="5" fill="#F5C518" />
                </motion.g>
                
                {/* 2. Central labels (fade/slide in next) */}
                <motion.g
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, ease: easeCurve }}
                >
                  <text x="182" y="179" fill="#151515" fontSize="11" fontWeight="700" fontFamily="var(--font-manrope)">
                    YOUR STARTING POINT
                  </text>
                  <text x="182" y="193" fill="#888888" fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter)">
                    (Local Starting Area)
                  </text>
                </motion.g>

                {/* 3. Animated Route Lines (draw outward) */}
                {/* Center to D1 */}
                <motion.path
                  d="M160 180 Q 110 135 80 85"
                  stroke="#F5C518"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
                />

                {/* Center to D2 */}
                <motion.path
                  d="M160 180 Q 250 135 320 85"
                  stroke="#F5C518"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
                />

                {/* Center to D3 */}
                <motion.path
                  d="M160 180 L 160 275"
                  stroke="#F5C518"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
                />

                {/* 4. Destination Nodes — opacity-only entrance (scale+transformOrigin is unreliable inside SVG in Framer Motion) */}
                {/* Destination 1 Node — Airport & Railway */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3, ease: easeCurve }}
                >
                  <circle cx="80" cy="85" r="9" fill="rgba(0,0,0,0.04)" stroke="#d0d0d8" strokeWidth="1.5" />
                  <circle cx="80" cy="85" r="3.5" fill="#888888" />
                </motion.g>

                {/* Destination 2 Node — Outstation & Temple Trips */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3, ease: easeCurve }}
                >
                  <circle cx="320" cy="85" r="9" fill="rgba(0,0,0,0.04)" stroke="#d0d0d8" strokeWidth="1.5" />
                  <circle cx="320" cy="85" r="3.5" fill="#888888" />
                </motion.g>

                {/* Destination 3 Node — Local & Chennai Travel */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3, ease: easeCurve }}
                >
                  <circle cx="160" cy="275" r="9" fill="rgba(0,0,0,0.04)" stroke="#d0d0d8" strokeWidth="1.5" />
                  <circle cx="160" cy="275" r="3.5" fill="#888888" />
                </motion.g>

                {/* 5. Destination labels (fade in last) */}
                <motion.g
                  initial={{ opacity: 0, y: 3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6, ease: easeCurve }}
                >
                  <text x="80" y="60" textAnchor="middle" fill="#151515" fontSize="10.5" fontWeight="600" fontFamily="var(--font-manrope)">
                    Airport & Railway
                  </text>
                  <text x="320" y="60" textAnchor="middle" fill="#151515" fontSize="10.5" fontWeight="600" fontFamily="var(--font-manrope)">
                    Outstation & Temple Trips
                  </text>
                  <text x="160" y="302" textAnchor="middle" fill="#151515" fontSize="10.5" fontWeight="600" fontFamily="var(--font-manrope)">
                    Local & Chennai Travel
                  </text>
                </motion.g>
              </svg>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontFamily: "var(--font-inter)" }}>
            Based in Poonamallee / Thirumazhisai starting hub &bull; Confirm coverage for your specific trip:{" "}
            <a
              href="https://wa.me/919283455152?text=Hi%20VA%20Cabs%2C%20do%20you%20cover%20rides%20from%20my%20location%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F5C518", textDecoration: "none", fontWeight: 700 }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Ask on WhatsApp
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .areas-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .route-map-box {
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1.1;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.01);
        }

        @media (min-width: 1600px) {
          .areas-site-container { max-width: 1520px !important; }
          .areas-split-layout { gap: 110px !important; }
          .route-map-box { max-width: 540px !important; }
        }

        @media (max-width: 900px) {
          .areas-split-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .route-map-box { margin: 0 auto; }
        }
        @media (prefers-reduced-motion: reduce) {
          path {
            stroke-dasharray: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
