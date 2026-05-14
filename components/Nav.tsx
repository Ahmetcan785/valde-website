"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Produkte", href: "/#produkte" },
  { label: "Über uns", href: "/#ueber-uns" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const percent = (scrollY / (docHeight - winHeight)) * 100;
      setScrollPercent(Math.min(100, Math.max(0, percent)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white"
        style={{ borderBottom: "0.5px solid #e8e8e8" }}
      >
        {/* Scroll progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e8f0ea]">
          <div
            className="h-full bg-[#1a3a2a]"
            style={{
              width: `${scrollPercent}%`,
              transition: "width 0.1s ease",
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-[var(--font-inter)] text-[#1a1a1a] select-none"
            style={{ fontSize: "1.5rem", fontWeight: 400, letterSpacing: "0.2em" }}
          >
            VALDÉ
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center" style={{ gap: "2.5rem", marginLeft: "auto" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-[var(--font-inter)] text-[#1a1a1a] transition-colors duration-200"
                style={{ fontSize: "0.95rem", fontWeight: 400, letterSpacing: "0.05em", textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}

            <a
              href="#waitlist"
              className="font-[var(--font-inter)] flex items-center whitespace-nowrap transition-colors duration-200"
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "#ffffff",
                background: "#1a3a2a",
                padding: "0.7rem 1.8rem",
                borderRadius: "3px",
                gap: "0.6rem",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#2d5a3f")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#1a3a2a")
              }
            >
              <PulsingDot />
              Waitlist
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
          >
            <span
              className={[
                "block w-6 h-px bg-[#1a1a1a] transition-all duration-300 origin-center",
                menuOpen ? "translate-y-[6px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-px bg-[#1a1a1a] transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-px bg-[#1a1a1a] transition-all duration-300 origin-center",
                menuOpen ? "-translate-y-[6px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (i + 1) }}
                className="font-[var(--font-inter)] text-[#1a1a1a] text-3xl font-light tracking-[0.15em]"
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="#waitlist"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * (NAV_LINKS.length + 1) }}
              className="font-[var(--font-inter)] flex items-center mt-2"
              style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "#ffffff",
                background: "#1a3a2a",
                padding: "0.6rem 1.4rem",
                borderRadius: "3px",
                gap: "0.6rem",
              }}
            >
              <PulsingDot />
              Waitlist
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PulsingDot() {
  return (
    <motion.span
      style={{
        display: "inline-block",
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: "#b8956a",
        flexShrink: 0,
      }}
      animate={{ opacity: [1, 0.4, 1], scale: [1, 0.7, 1] }}
      transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
    />
  );
}
