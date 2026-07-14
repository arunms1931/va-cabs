"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield, Compass, Landmark, UserCheck } from "lucide-react";

const WA_LINK = `https://wa.me/918072000428?text=Hi%20VA%20Cabs%2C%20I%20would%20like%20to%20book%20a%20cab.`;

const benefits = [
  {
    Icon: UserCheck,
    title: "Direct Booking",
    desc: "Skip middleman apps. Discuss your travel route, timing, and preferences directly with us for a personalized ride.",
  },
  {
    Icon: Landmark,
    title: "Fair & Transparent Pricing",
    desc: "Get upfront, honest quotes agreed upon before your trip begins. No surge fees, commission markups, or hidden extras.",
  },
  {
    Icon: Compass,
    title: "Experienced Service",
    desc: "VA Cabs is built on years of local driving experience and practical travel knowledge.",
  },
  {
    Icon: Shield,
    title: "Reliable Service",
    desc: "Committed to prompt arrivals, well-maintained vehicles, and comfortable journeys for local or outstation travel.",
  },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function WhyChooseSection() {
  return (
    <section
      id="why"
      style={{
        background: "var(--surface-light)", // Light surface theme
        padding: "84px 0",
        position: "relative",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="site-container why-site-container">
        <div className="why-split-layout">
          {/* LEFT SIDE: Heading and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="why-left"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "16px", height: "1.5px", background: "#F5C518", display: "block" }} />
              <span className="section-eyebrow" style={{ margin: 0 }}>Why VA Cabs</span>
            </div>
            
            <h2
              className="section-title"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: "24px",
                letterSpacing: "-0.03em",
              }}
            >
              More Personal.
              <br />
              More Reliable.
            </h2>
            <p
              className="section-body"
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                marginBottom: "36px",
                maxWidth: "440px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Skip complicated booking apps and speak directly with VA Cabs. Discuss your journey, travel requirements and vehicle needs personally.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="why-whatsapp-cta hover-shine"
            >
              <MessageCircle size={18} />
              Discuss Your Trip
            </a>
          </motion.div>

          {/* RIGHT SIDE: Connected visual timeline sequence */}
          <div className="why-right" style={{ position: "relative" }}>
            {/* SVG Connecting Journey/Progress Line */}
            <div
              style={{
                position: "absolute",
                left: "21px",
                top: "16px",
                bottom: "16px",
                width: "2px",
                zIndex: 1,
                pointerEvents: "none",
              }}
              className="timeline-line-container"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                style={{
                  width: "100%",
                  background: "linear-gradient(to bottom, #F5C518 0%, rgba(245, 197, 24, 0.2) 100%)",
                }}
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="why-timeline"
              style={{ position: "relative", zIndex: 2 }}
            >
              {benefits.map(({ Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeCurve } },
                  }}
                  className="timeline-item"
                  style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "32px",
                    position: "relative",
                  }}
                >
                  {/* Circle dot icon */}
                  <div className="timeline-node">
                    <Icon size={16} className="timeline-icon" />
                  </div>
                  
                  {/* Content details */}
                  <div style={{ flex: 1, paddingTop: "2px" }}>
                    <h3 className="timeline-title">{title}</h3>
                    <p className="timeline-desc">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .why-split-layout {
          display: grid;
          grid-template-columns: 4.5fr 7.5fr;
          gap: 64px;
          align-items: start;
        }

        .why-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: sticky;
          top: 130px;
        }

        .why-whatsapp-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #F5C518;
          color: #000000;
          font-family: var(--font-inter);
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 12px rgba(245, 197, 24, 0.2);
          overflow: hidden;
        }
        .why-whatsapp-cta:hover {
          background: #ffd23f;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(245, 197, 24, 0.35);
        }
        .why-whatsapp-cta:active {
          transform: translateY(0) scale(0.98);
        }

        /* Shine Hover Sweep */
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

        .timeline-node {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #F5C518;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5C518;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }

        .timeline-item:hover .timeline-node {
          background: #F5C518;
          color: #ffffff;
        }

        .timeline-icon {
          transition: transform 0.3s ease;
        }
        .timeline-item:hover .timeline-icon {
          transform: scale(1.03);
        }

        .timeline-title {
          font-family: var(--font-manrope);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .timeline-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.65;
        }

        /* Timeline last element margin remove */
        .why-timeline > div:last-child {
          margin-bottom: 0 !important;
        }

        @media (max-width: 980px) {
          .why-split-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .why-left {
            position: relative;
            top: 0;
          }
        }
        @media (max-width: 560px) {
          .why-whatsapp-cta {
            width: 100%;
            justify-content: center;
          }
          .timeline-item {
            margin-bottom: 24px !important;
            gap: 16px !important;
          }
          .timeline-node {
            width: 38px !important;
            height: 38px !important;
          }
        }

        @media (min-width: 1200px) {
          .why-site-container { max-width: 1520px !important; }
          .why-split-layout { gap: 96px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-whatsapp-cta:hover, .timeline-item:hover .timeline-icon {
            transform: none !important;
          }
          .timeline-line-container div {
            height: 100% !important;
          }
          .hover-shine::after {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
