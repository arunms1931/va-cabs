"use client";

import { motion } from "framer-motion";
import {
  Car, Clock, CalendarDays, Plane, TrainFront,
  MapPinned, HeartPulse, Sparkles, Church, Moon, LucideIcon
} from "lucide-react";

type Service = { Icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  {
    Icon: Car,
    title: "Local Cab",
    desc: "Comfortable local two-way travel for your everyday visits, appointments, and return journeys in the same cab.",
  },
  {
    Icon: Clock,
    title: "Hourly Packages",
    desc: "Flexible hourly cab hire for errands and multiple visits, returning in the same cab.",
  },
  {
    Icon: CalendarDays,
    title: "Full-Day Cab",
    desc: "Dedicated day-long bookings for business meetings, sightseeing, or outings, returning in the same cab.",
  },
  {
    Icon: Plane,
    title: "Airport Two-Way Travel",
    desc: "Travel to the airport and return in the same cab as part of your planned trip.",
  },
  {
    Icon: TrainFront,
    title: "Railway Station Two-Way Travel",
    desc: "Travel to the railway station and return in the same cab as part of your planned trip.",
  },
  {
    Icon: MapPinned,
    title: "Outstation Travel",
    desc: "Two-way long-distance travel to other districts and major cities, returning in the same cab.",
  },
  {
    Icon: HeartPulse,
    title: "Hospital Visits",
    desc: "Comfortable two-way cab travel for hospital visits, returning in the same cab.",
  },
  {
    Icon: Sparkles,
    title: "Wedding & Events",
    desc: "Coordinated guest and family transport solutions for weddings and functions, returning in the same cab.",
  },
  {
    Icon: Church,
    title: "Temple Trips",
    desc: "Planned temple visits and family journeys, returning in the same cab as part of your trip.",
  },
  {
    Icon: Moon,
    title: "Early / Late Travel",
    desc: "Cab service available anytime for planned early morning or late-night return travel.",
  },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "var(--bg-light)",
        padding: "110px 0",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}
          >
            <span style={{ width: "16px", height: "1.5px", background: "#F5C518", display: "block" }} />
            <span className="section-eyebrow" style={{ margin: 0 }}>
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: easeCurve }}
            className="section-title"
            style={{ marginBottom: "16px", color: "var(--text-primary)" }}
          >
            Travel Made Simple
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: easeCurve }}
            className="section-body"
            style={{ maxWidth: "560px", margin: "0 auto", color: "var(--text-secondary)" }}
          >
            From everyday rides to planned airport journeys and outstation travel, choose the service that fits your needs.
          </motion.p>
        </div>

        {/* Uniform 3-column service card grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="services-grid"
        >
          {services.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeCurve } },
              }}
              className="srv-card"
            >
              <div className="srv-icon-box">
                <Icon size={20} className="srv-icon" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 className="srv-card-title">{title}</h3>
                <p className="srv-card-desc">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Trip CTA — outside the grid, full-width centred dashed banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
          className="srv-cta-banner"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
            <h3 className="srv-card-title" style={{ color: "#151515" }}>Need a Custom Trip?</h3>
            <p className="srv-card-desc" style={{ color: "#555555" }}>
              Have a specific travel plan, multi-city route, or recurring transport need? Discuss it with us and get a direct quote.
            </p>
          </div>
          <a
            href="https://wa.me/919283455152?text=Hi%20VA%20Cabs%2C%20I%20have%20a%20specific%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="srv-cta-btn"
          >
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 0;
        }

        .srv-card {
          background: var(--surface-light);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.01);
        }

        .srv-card:hover {
          transform: translateY(-3px);
          border-color: rgba(245, 197, 24, 0.4);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
        }

        .srv-card:hover .srv-icon {
          transform: scale(1.03) translate(1px, -1px);
        }

        .srv-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(245, 197, 24, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5C518;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .srv-icon {
          transition: transform 0.25s ease;
        }

        .srv-card-title {
          font-family: var(--font-manrope);
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--text-primary);
        }

        .srv-card-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.6;
        }

        /* Custom Trip CTA banner — full width, visually distinct from service cards */
        .srv-cta-banner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: rgba(245, 197, 24, 0.04);
          border: 1.5px dashed rgba(245, 197, 24, 0.3);
          border-radius: 8px;
          padding: 28px 32px;
          margin-top: 24px;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .srv-cta-banner:hover {
          border-color: rgba(245, 197, 24, 0.65);
          box-shadow: 0 8px 20px rgba(245, 197, 24, 0.06);
        }

        .srv-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: #F5C518;
          color: #000;
          font-family: var(--font-inter);
          font-weight: 700;
          font-size: 0.88rem;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .srv-cta-btn:hover {
          background: #ffd23f;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; gap: 16px; }
          .srv-cta-banner { flex-direction: column; align-items: flex-start; }
          .srv-cta-btn { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .srv-card:hover { transform: none !important; }
          .srv-cta-btn:hover { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
