"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const els = Array.from(content.children) as HTMLElement[];
    gsap.set(els, { opacity: 0, y: 30 });

    console.log("[WaitlistCTA] useEffect running, els found:", els.length);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        console.log("[WaitlistCTA] ScrollTrigger onEnter fired");
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      },
    });

    return () => trigger.kill();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    setError("");

    try {
      const response = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=WpfrVZ", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "revision": "2023-12-15",
        },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: {
              profile: {
                data: {
                  type: "profile",
                  attributes: {
                    email: email,
                  },
                },
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: "R4kMzY",
                },
              },
            },
          },
        }),
      });

      console.log("Klaviyo response status:", response.status);
      const responseText = await response.text();
      console.log("Klaviyo response body:", responseText);

      if (response.status === 202) {
        setSuccess(true);
        setEmail("");
      } else {
        console.error("Klaviyo error:", responseText);
        setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
      }
    } catch {
      setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  }

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      className="w-full px-6 py-16 md:py-32"
      style={{ backgroundColor: "#1a3a2a" }}
    >
      <div className="max-w-[700px] mx-auto text-center">
        <div ref={contentRef}>

          {/* Label */}
          <span
            className="block font-[var(--font-inter)] text-[0.7rem] uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Limitierter Launch
          </span>

          {/* Title */}
          <h2
            className="font-[var(--font-inter)] font-light text-white mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2 }}
          >
            Sei beim Launch dabei.
          </h2>

          {/* Subtext */}
          <p
            className="font-[var(--font-inter)] mt-4"
            style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}
          >
            Trag dich jetzt ein und erhalte als Erster Zugang — inklusive Launch-Rabatt.
          </p>

          {/* Form block */}
          <div className="mt-10">
            {success ? (
              <p
                className="font-[var(--font-inter)] italic"
                style={{ fontSize: "1.4rem", color: "#1a3a2a" }}
              >
                Danke — du bist dabei.
              </p>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex items-stretch mx-auto"
                  style={{ maxWidth: "460px" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="deine@email.de"
                    aria-label="E-Mail-Adresse"
                    className="flex-1 min-w-0 font-[var(--font-inter)] text-[0.85rem] text-[#1a1a1a] bg-white outline-none placeholder:text-[#6b6b6b] px-[1.4rem]"
                    style={{ borderRadius: "4px 0 0 4px", border: "none", height: "50px" }}
                  />
                  <button
                    type="submit"
                    className="font-[var(--font-inter)] font-medium text-[0.85rem] text-white shrink-0 transition-colors duration-200"
                    style={{
                      backgroundColor: "#b8956a",
                      padding: "0 1.8rem",
                      borderRadius: "0 4px 4px 0",
                      height: "50px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#ffffff";
                      el.style.color = "#1a3a2a";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#b8956a";
                      el.style.color = "#ffffff";
                    }}
                  >
                    Jetzt eintragen
                  </button>
                </form>

                {error && (
                  <p
                    className="font-[var(--font-inter)] text-[0.75rem] mt-2"
                    style={{ color: "#ff6b6b" }}
                  >
                    {error}
                  </p>
                )}

                <p
                  className="font-[var(--font-inter)] text-[0.7rem] mt-4"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Kein Spam. Jederzeit abmeldbar.
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
