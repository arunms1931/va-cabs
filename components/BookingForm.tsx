"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Clock, MessageCircle, CheckCircle2 } from "lucide-react";

const PHONE = "919283455152";

function buildWAMessage(form: { pickup: string; drop: string; date: string; time: string }) {
  const lines = [
    "🚖 *New Cab Booking Enquiry — VA Cabs*",
    "",
    `📍 *Pickup Location:* ${form.pickup || "—"}`,
    `🏁 *Drop Location:* ${form.drop || "—"}`,
    `📅 *Date:* ${
      form.date
        ? new Date(form.date).toLocaleDateString("en-IN", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
          })
        : "—"
    }`,
    `⏰ *Time:* ${form.time || "—"}`,
    "",
    "_Please confirm availability and share the fare._",
  ];
  return encodeURIComponent(lines.join("\n"));
}

/* ─── Field component ─────────────────────────────────────────────── */
function Field({
  id, label, icon, type, placeholder, min, value, onChange,
}: {
  id: string; label: string; icon: React.ReactNode;
  type: string; placeholder?: string; min?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: 0 }}>
      <label
        htmlFor={id}
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: focused ? "#F5C518" : "#666666",
          fontFamily: "var(--font-manrope)",
          transition: "color 0.25s ease",
        }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute", left: "12px", top: "50%",
            transform: "translateY(-50%)", color: focused ? "#F5C518" : "#888888",
            pointerEvents: "none", transition: "color 0.25s ease",
            display: "flex", alignItems: "center",
          }}
        >
          {icon}
        </span>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          min={min}
          value={value}
          onChange={onChange}
          required={id === "pickup" || id === "drop"}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            height: "44px",
            padding: "10px 12px 10px 38px",
            borderRadius: "6px",
            background: "#ffffff",
            border: focused ? "1.5px solid #F5C518" : "1.5px solid #e2e2e7",
            boxShadow: focused ? "0 0 0 3px rgba(245,197,24,0.12)" : "none",
            color: "#151515",
            fontFamily: "var(--font-inter)",
            fontSize: "0.9rem",
            outline: "none",
            transition: "all 0.25s ease",
            colorScheme: "light",
          }}
        />
      </div>
    </div>
  );
}

export default function BookingForm() {
  const [form, setForm] = useState({ pickup: "", drop: "", date: "", time: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickup || !form.drop) {
      alert("Please enter at least pickup and drop locations.");
      return;
    }
    window.open(`https://wa.me/${PHONE}?text=${buildWAMessage(form)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <motion.div
      id="booking"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-60px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "8px", // Moderate border radius
            border: "1px solid rgba(0, 0, 0, 0.05)", // Soft hairline border
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)", // Subtle layered shadow
            padding: "24px 32px",
          }}
        >
          {/* Simple header: Plan Your Ride */}
          <div style={{ marginBottom: "18px" }}>
            <h3
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#151515",
                letterSpacing: "-0.01em",
              }}
            >
              Plan Your Ride
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 5-column row: Pickup | Drop | Date | Time | WhatsApp CTA */}
            <div className="booking-row">
              <Field
                id="pickup" label="Pickup" type="text"
                placeholder="Where from?"
                icon={<MapPin size={16} />}
                value={form.pickup} onChange={handleChange}
              />
              <Field
                id="drop" label="Drop" type="text"
                placeholder="Where to?"
                icon={<Navigation size={16} />}
                value={form.drop} onChange={handleChange}
              />
              <Field
                id="date" label="Date" type="date"
                min={today}
                icon={<Calendar size={16} />}
                value={form.date} onChange={handleChange}
              />
              <Field
                id="time" label="Time" type="time"
                icon={<Clock size={16} />}
                value={form.time} onChange={handleChange}
              />

              {/* Submit button — matches field height and labels */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: 0 }}>
                <span style={{ fontSize: "11px", opacity: 0, userSelect: "none" }}>CTA</span>
                <button
                  type="submit"
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "44px",
                    borderRadius: "6px",
                    background: sent ? "#25D366" : "#F5C518",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                    boxShadow: sent
                      ? "0 4px 12px rgba(37,211,102,0.2)"
                      : "0 4px 12px rgba(245,197,24,0.2)",
                    width: "100%",
                    overflow: "hidden",
                  }}
                  className="booking-btn hover-shine"
                >
                  {sent ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 700, fontSize: "0.9rem" }}>
                      <CheckCircle2 size={16} /> Opened!
                    </div>
                  ) : (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 700, fontSize: "0.9rem" }}>
                        <MessageCircle size={16} /> Send Enquiry
                      </div>
                      <div style={{ fontSize: "0.68rem", opacity: 0.7, fontWeight: 500 }}>
                        via WhatsApp
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .booking-row {
          display: grid;
          grid-template-columns: 2.1fr 2.1fr 1.4fr 1.2fr 1.8fr;
          gap: 16px;
          align-items: start;
        }
        .booking-btn:hover {
          background: #ffd23f;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 16px rgba(245,197,24,0.35);
        }
        .booking-btn:active {
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

        @media (max-width: 1024px) {
          .booking-row { grid-template-columns: 1fr 1fr 1fr; }
          .booking-row > div:nth-child(5) { grid-column: 1 / -1; }
        }
        @media (max-width: 720px) {
          .booking-row { grid-template-columns: 1fr 1fr; }
          .booking-row > div:nth-child(5) { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .booking-row { grid-template-columns: 1fr; }
          .booking-row > div:nth-child(5) { grid-column: 1; }
          #booking > div { padding: 0 24px !important; }
          #booking > div > div { padding: 24px 20px 20px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          #booking {
            transform: none !important;
            animation: none !important;
          }
          .booking-btn:hover {
            transform: none !important;
          }
          .hover-shine::after {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
