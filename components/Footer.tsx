"use client";

import Link from "next/link";

const PRODUCT_LINKS = [
  "Face Cleanser",
  "Face Serum",
  "Moisturizer",
  "Bartöl",
  "Rosmarinöl",
  "Bartroller",
];

const LEGAL_LINKS = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "#" },
];

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07Z" />
    </svg>
  );
}

function FooterLink({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="block font-[var(--font-inter)] transition-colors duration-200"
      style={{
        fontSize: "0.8rem",
        color: "rgba(255,255,255,0.5)",
        marginBottom: "0.4rem",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color =
          "rgba(255,255,255,0.5)";
      }}
    >
      {label}
    </Link>
  );
}

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block font-[var(--font-inter)] uppercase"
      style={{
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.3)",
        marginBottom: "1rem",
      }}
    >
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full px-6 py-8 md:py-16"
      style={{ backgroundColor: "#0d1a0f" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Left — brand */}
          <div>
            <span
              className="block font-[var(--font-inter)] font-light text-white tracking-[0.2em]"
              style={{ fontSize: "1.5rem" }}
            >
              VALDÉ
            </span>
            <p
              className="font-[var(--font-inter)] mt-2"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}
            >
              Männerpflege — ohne Kompromisse.
            </p>
            <p
              className="font-[var(--font-inter)] mt-1"
              style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}
            >
              Designed in Köln, Deutschland.
            </p>
          </div>

          {/* Middle — products */}
          <div>
            <ColumnLabel>Produkte</ColumnLabel>
            {PRODUCT_LINKS.map((label) => (
              <FooterLink key={label} label={label} href="#produkte" />
            ))}
          </div>

          {/* Right — legal */}
          <div>
            <ColumnLabel>Rechtliches</ColumnLabel>
            {LEGAL_LINKS.map(({ label, href }) => (
              <FooterLink key={label} label={label} href={href} />
            ))}
          </div>

        </div>

        {/* Divider */}
        <div
          className="w-full my-12"
          style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="font-[var(--font-inter)]"
            style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)" }}
          >
            © 2025 VALDÉ. Alle Rechte vorbehalten.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Brand statement */}
      <div style={{ paddingTop: "3rem", overflow: "hidden", textAlign: "center" }}>
        <span style={{
          display: "block",
          fontFamily: "var(--font-inter)",
          fontWeight: 800,
          fontSize: "clamp(8rem, 22vw, 20rem)",
          color: "#1a3a2a",
          letterSpacing: "0.15em",
          lineHeight: 1,
          userSelect: "none",
        }}>
          VALDÉ
        </span>
        <div style={{ marginTop: "1.5rem", paddingBottom: "3rem", display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="VALDÉ Logo" style={{ width: "800px", height: "auto", display: "block", margin: "0 auto" }} />
        </div>
      </div>
    </footer>
  );
}
