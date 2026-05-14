"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export default function BeardSection() {
  const router = useRouter();

  function handleDiscoverClick() {
    router.push("/?tab=bartpflege#produkte", { scroll: false });
    setTimeout(() => {
      document.getElementById("produkte")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <section className="w-full flex flex-col md:flex-row" style={{ background: "#0d1a0f" }}>
      {/* Left — image (55%) */}
      <motion.div
        className="w-full md:w-[55%] relative"
        style={{ minHeight: "600px" }}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Image
          src="/images/bartoel-lifestyle.png"
          alt="Bartöl Lifestyle"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </motion.div>

      {/* Right — text (45%) */}
      <div
        className="w-full md:w-[45%] flex items-center"
        style={{ background: "#0d1a0f" }}
      >
        <div
          className="w-full"
          style={{
            padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)",
          }}
        >
          <motion.span
            className="block font-[var(--font-inter)] uppercase"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.5rem",
            }}
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Bartpflege
          </motion.span>

          <motion.h2
            className="font-[var(--font-inter)] font-light"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Bartpflege. Neu gedacht.
          </motion.h2>

          <motion.div
            style={{
              width: "40px",
              height: "2px",
              background: "#b8956a",
              marginBottom: "2rem",
            }}
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          />

          <motion.p
            className="font-[var(--font-inter)]"
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2.5rem",
            }}
            variants={fadeUp(0.45)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Arganöl, Jojobaöl, Castoröl — keine Füllstoffe, nur was wirklich wirkt.
            Für einen Bart der gepflegt aussieht ohne dass man es sieht.
          </motion.p>

          <motion.button
            onClick={handleDiscoverClick}
            className="font-[var(--font-inter)] transition-opacity duration-200 hover:opacity-60"
            style={{
              fontSize: "0.85rem",
              color: "#ffffff",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              paddingBottom: "2px",
              background: "none",
              cursor: "pointer",
            }}
            variants={fadeUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Bartpflege entdecken →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
