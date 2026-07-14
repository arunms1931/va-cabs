"use client";

import { motion } from "framer-motion";
import { Navigation, MapPin, Globe, Plane } from "lucide-react";

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
              <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                
                {/* 1. Abstract Map Background Roads Grid */}
                <line x1="0" y1="165" x2="400" y2="165" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                <line x1="200" y1="0" x2="200" y2="360" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                
                {/* Diagonal abstract street paths */}
                <path d="M0 60 C 120 70, 180 120, 200 165" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" fill="none" />
                <path d="M400 60 C 280 70, 220 120, 200 165" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" fill="none" />
                <path d="M0 240 Q 150 210 400 280" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1.2" fill="none" />
                <path d="M50 360 C 100 280, 150 200, 200 165" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" fill="none" />
                
                {/* Intersections (small circle points) */}
                <circle cx="100" cy="120" r="1.5" fill="rgba(255, 255, 255, 0.08)" />
                <circle cx="300" cy="120" r="1.5" fill="rgba(255, 255, 255, 0.08)" />
                <circle cx="120" cy="220" r="1.5" fill="rgba(255, 255, 255, 0.08)" />
                <circle cx="280" cy="220" r="1.5" fill="rgba(255, 255, 255, 0.08)" />

                {/* 2. Paired Curved Road Loops */}
                
                {/* ROAD 1: Center to Airport & Railway (Top Left at 80, 75) */}
                <path
                  d="M 200 165 Q 115 140 80 75 Q 145 100 200 165"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 200 165 Q 115 140 80 75 Q 145 100 200 165"
                  stroke="#1A1A1A"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 200 165 Q 115 140 80 75 Q 145 100 200 165"
                  stroke="rgba(245, 197, 24, 0.4)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* ROAD 2: Center to Outstation & Temple (Top Right at 320, 75) */}
                <path
                  d="M 200 165 Q 255 100 320 75 Q 285 140 200 165"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 200 165 Q 255 100 320 75 Q 285 140 200 165"
                  stroke="#1A1A1A"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 200 165 Q 255 100 320 75 Q 285 140 200 165"
                  stroke="rgba(245, 197, 24, 0.4)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* ROAD 3: Center to Local & Chennai (Bottom at 200, 255) */}
                <path
                  d="M 200 165 Q 165 210 200 255 Q 235 210 200 165"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 200 165 Q 165 210 200 255 Q 235 210 200 165"
                  stroke="#1A1A1A"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 200 165 Q 165 210 200 255 Q 235 210 200 165"
                  stroke="rgba(245, 197, 24, 0.4)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* 3. Animated Top-View SVG Cars */}
                
                {/* Loop 1 Car (Airport & Railway) */}
                <g className="animated-car-group">
                  <animateMotion
                    dur="9s"
                    repeatCount="indefinite"
                    path="M 200 165 Q 115 140 80 75 Q 145 100 200 165"
                    rotate="auto"
                    calcMode="linear"
                    keyTimes="0; 0.05; 0.45; 0.55; 0.95; 1"
                    keyPoints="0; 0; 0.5; 0.5; 1; 1"
                    begin="0s"
                  />
                  {/* Shadow */}
                  <rect x="-6" y="-2.5" width="12" height="7" rx="1.5" fill="rgba(0, 0, 0, 0.55)" transform="translate(0.5, 0.5)" />
                  {/* Yellow body */}
                  <rect x="-6" y="-3" width="12" height="6" rx="2" fill="#F5C518" stroke="#111111" strokeWidth="1" />
                  {/* Cabin roof */}
                  <rect x="-3.5" y="-2" width="6" height="4" rx="1" fill="#111111" />
                  {/* Windshield frame */}
                  <rect x="-2" y="-1.5" width="3.5" height="3" rx="0.5" fill="#F5C518" />
                  {/* Glass */}
                  <rect x="0.5" y="-1.5" width="1" height="3" fill="#111111" />
                  {/* Front Headlights */}
                  <rect x="5" y="-2.5" width="1" height="1" rx="0.2" fill="#ffffff" />
                  <rect x="5" y="1.5" width="1" height="1" rx="0.2" fill="#ffffff" />
                  {/* Rear Taillights */}
                  <rect x="-6" y="-2.5" width="0.8" height="1" rx="0.2" fill="#ff3333" />
                  <rect x="-6" y="1.5" width="0.8" height="1" rx="0.2" fill="#ff3333" />
                </g>

                {/* Loop 2 Car (Outstation & Temple) */}
                <g className="animated-car-group">
                  <animateMotion
                    dur="11s"
                    repeatCount="indefinite"
                    path="M 200 165 Q 255 100 320 75 Q 285 140 200 165"
                    rotate="auto"
                    calcMode="linear"
                    keyTimes="0; 0.05; 0.45; 0.55; 0.95; 1"
                    keyPoints="0; 0; 0.5; 0.5; 1; 1"
                    begin="2.5s"
                  />
                  <rect x="-6" y="-2.5" width="12" height="7" rx="1.5" fill="rgba(0, 0, 0, 0.55)" transform="translate(0.5, 0.5)" />
                  <rect x="-6" y="-3" width="12" height="6" rx="2" fill="#F5C518" stroke="#111111" strokeWidth="1" />
                  <rect x="-3.5" y="-2" width="6" height="4" rx="1" fill="#111111" />
                  <rect x="-2" y="-1.5" width="3.5" height="3" rx="0.5" fill="#F5C518" />
                  <rect x="0.5" y="-1.5" width="1" height="3" fill="#111111" />
                  <rect x="5" y="-2.5" width="1" height="1" rx="0.2" fill="#ffffff" />
                  <rect x="5" y="1.5" width="1" height="1" rx="0.2" fill="#ffffff" />
                  <rect x="-6" y="-2.5" width="0.8" height="1" rx="0.2" fill="#ff3333" />
                  <rect x="-6" y="1.5" width="0.8" height="1" rx="0.2" fill="#ff3333" />
                </g>

                {/* Loop 3 Car (Local & Chennai) */}
                <g className="animated-car-group">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path="M 200 165 Q 165 210 200 255 Q 235 210 200 165"
                    rotate="auto"
                    calcMode="linear"
                    keyTimes="0; 0.05; 0.45; 0.55; 0.95; 1"
                    keyPoints="0; 0; 0.5; 0.5; 1; 1"
                    begin="5.0s"
                  />
                  <rect x="-6" y="-2.5" width="12" height="7" rx="1.5" fill="rgba(0, 0, 0, 0.55)" transform="translate(0.5, 0.5)" />
                  <rect x="-6" y="-3" width="12" height="6" rx="2" fill="#F5C518" stroke="#111111" strokeWidth="1" />
                  <rect x="-3.5" y="-2" width="6" height="4" rx="1" fill="#111111" />
                  <rect x="-2" y="-1.5" width="3.5" height="3" rx="0.5" fill="#F5C518" />
                  <rect x="0.5" y="-1.5" width="1" height="3" fill="#111111" />
                  <rect x="5" y="-2.5" width="1" height="1" rx="0.2" fill="#ffffff" />
                  <rect x="5" y="1.5" width="1" height="1" rx="0.2" fill="#ffffff" />
                  <rect x="-6" y="-2.5" width="0.8" height="1" rx="0.2" fill="#ff3333" />
                  <rect x="-6" y="1.5" width="0.8" height="1" rx="0.2" fill="#ff3333" />
                </g>

                {/* 4. Destination Nodes & Icons (Drawn on top of roads) */}
                {/* Destination 1 — Airport & Railway (80, 75) */}
                <g>
                  <circle cx="80" cy="75" r="16" fill="#151515" stroke="#F5C518" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 4px rgba(245, 197, 24, 0.2))" }} />
                  <g transform="translate(71, 66)" style={{ color: "#F5C518" }}>
                    <Plane size={18} />
                  </g>
                </g>

                {/* Destination 2 — Outstation & Temple (320, 75) */}
                <g>
                  <circle cx="320" cy="75" r="16" fill="#151515" stroke="#F5C518" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 4px rgba(245, 197, 24, 0.2))" }} />
                  <g transform="translate(311, 66)" style={{ color: "#F5C518" }}>
                    <MapPin size={18} />
                  </g>
                </g>

                {/* Destination 3 — Local & Chennai (200, 255) */}
                <g>
                  <circle cx="200" cy="255" r="16" fill="#151515" stroke="#F5C518" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 4px rgba(245, 197, 24, 0.2))" }} />
                  <g transform="translate(191, 246)" style={{ color: "#F5C518" }}>
                    <Navigation size={18} />
                  </g>
                </g>

                {/* 5. Central Starting Node (Drawn on top of roads) */}
                <g style={{ transformOrigin: "200px 165px" }}>
                  {/* Outer Pulsing Glow */}
                  <circle cx="200" cy="165" r="24" fill="rgba(245, 197, 24, 0.08)" className="pulse-slow" />
                  {/* Inner Glow */}
                  <circle cx="200" cy="165" r="14" fill="rgba(245, 197, 24, 0.18)" />
                  {/* Glowing Core */}
                  <circle cx="200" cy="165" r="5.5" fill="#F5C518" />
                </g>

                {/* 6. Labels Section (Drawn last for best legibility) */}
                {/* Destination Labels */}
                <g>
                  <text x="80" y="44" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="var(--font-manrope)">
                    Airport &amp; Railway
                  </text>
                  <text x="320" y="44" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="var(--font-manrope)">
                    Outstation &amp; Temple
                  </text>
                  <text x="200" y="294" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="var(--font-manrope)">
                    Local &amp; Chennai
                  </text>
                </g>
                
                {/* Starting Point Labels (Placed on the right to prevent overlap) */}
                <g>
                  <text x="228" y="162" textAnchor="start" fill="#ffffff" fontSize="10.5" fontWeight="800" fontFamily="var(--font-manrope)" letterSpacing="1px" style={{ textShadow: "0 1px 4px rgba(17, 17, 17, 0.9)" }}>
                    YOUR STARTING POINT
                  </text>
                  <text x="228" y="176" textAnchor="start" fill="#888888" fontSize="9" fontWeight="600" fontFamily="var(--font-inter)" letterSpacing="0.2px" style={{ textShadow: "0 1px 4px rgba(17, 17, 17, 0.9)" }}>
                    Thirumazhisai Hub
                  </text>
                </g>
              </svg>

              {/* GPS HUD Overlay (Two-Way Travel Info) */}
              <div className="hud-overlay">
                <span className="hud-tag">Two-Way Travel</span>
                <span className="hud-text">Travel to your destination and return in the same cab.</span>
              </div>
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
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1.1;
          background: #111111; /* Deep charcoal map background */
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .hud-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: center;
          text-align: center;
          z-index: 5;
        }

        .hud-tag {
          font-size: 10px;
          font-weight: 800;
          color: #F5C518;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: var(--font-manrope);
        }

        .hud-text {
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-inter);
          line-height: 1.4;
        }

        @keyframes pulseRadius {
          0% { r: 18px; opacity: 0.5; }
          50% { r: 24px; opacity: 0.95; }
          100% { r: 18px; opacity: 0.5; }
        }

        .pulse-slow {
          animation: pulseRadius 3s infinite ease-in-out;
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
          .pulse-slow {
            animation: none !important;
          }
          .animated-car-group {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
