"use client";

import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  side: "left" | "right";
  delay: number;
}

const FEATURES: Feature[] = [
  {
    title: "100% Natürliche Inhaltsstoffe",
    description: "Kein einziger Füllstoff. Nur Wirkstoffe die wirklich funktionieren.",
    side: "left",
    delay: 0.1,
  },
  {
    title: "100% Transparent & ehrlich",
    description: "Wir zeigen offen was in jedem Produkt steckt — und warum.",
    side: "left",
    delay: 0.2,
  },
  {
    title: "Für Männerhaut",
    description: "Nicht umgelabelt. Gezielt für die Bedürfnisse von Männerhaut entwickelt.",
    side: "right",
    delay: 0.3,
  },
  {
    title: "Klares, gepflegtes Hautbild",
    description: "Sichtbare Ergebnisse. Die für sich sprechen.",
    side: "right",
    delay: 0.4,
  },
];

function Block({ feature, align }: { feature: Feature; align: "left" | "right" }) {
  const isLeft = align === "left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay: feature.delay }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isLeft ? "flex-end" : "flex-start",
        textAlign: isLeft ? "right" : "left",
      }}
    >
      <p style={{
        fontFamily: "var(--font-inter)",
        fontSize: "1.3rem",
        fontWeight: 600,
        color: "#1a3a2a",
        marginTop: "0.6rem",
        marginBottom: 0,
      }}>
        {feature.title}
      </p>
      <p style={{
        fontFamily: "var(--font-inter)",
        fontSize: "0.85rem",
        fontWeight: 400,
        color: "#6b6b6b",
        lineHeight: 1.7,
        maxWidth: "200px",
        marginTop: "0.4rem",
      }}>
        {feature.description}
      </p>
    </motion.div>
  );
}

const LEFT_FEATURES = FEATURES.filter((f) => f.side === "left");
const RIGHT_FEATURES = FEATURES.filter((f) => f.side === "right");

export default function WhyValde() {
  return (
    <section
      id="ueber-uns"
      style={{ backgroundColor: "#ffffff", padding: "6rem 4rem", textAlign: "center" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        style={{ marginBottom: "4rem" }}
      >
        <h2 style={{
          fontFamily: "var(--font-inter)",
          fontSize: "2.8rem",
          fontWeight: 400,
          color: "#1a1a1a",
          margin: 0,
        }}>
          Dein Morgen. Dein Ritual.
        </h2>
      </motion.div>

      {/* Desktop grid */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Left column */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          alignItems: "flex-end",
          textAlign: "right",
          paddingRight: "4rem",
        }}>
          {LEFT_FEATURES.map((f) => (
            <Block key={f.title} feature={f} align="left" />
          ))}
        </div>

        {/* Center — product image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cleanser-hand.png"
            alt="VALDÉ Face Cleanser"
            style={{
              height: "520px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.10))",
            }}
          />
        </motion.div>

        {/* Right column */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          alignItems: "flex-start",
          textAlign: "left",
          paddingLeft: "4rem",
        }}>
          {RIGHT_FEATURES.map((f) => (
            <Block key={f.title} feature={f} align="right" />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex flex-col md:hidden"
        style={{ gap: "3rem", alignItems: "center" }}
      >
        {LEFT_FEATURES.map((f) => (
          <Block key={f.title} feature={f} align="right" />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cleanser-hand.png"
            alt="VALDÉ Face Cleanser"
            style={{
              height: "280px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.10))",
            }}
          />
        </motion.div>

        {RIGHT_FEATURES.map((f) => (
          <Block key={f.title} feature={f} align="right" />
        ))}
      </div>
    </section>
  );
}
