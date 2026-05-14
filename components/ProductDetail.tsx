"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const [activeSize, setActiveSize] = useState(product.sizes[0]);

  return (
    <main className="w-full bg-white min-h-screen">
      <div
        className="max-w-[1200px] mx-auto"
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
        }}
      >
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="font-[var(--font-inter)] transition-colors duration-200"
          style={{ fontSize: "0.85rem", color: "#6b6b6b", marginTop: "1.5rem", marginBottom: "1.5rem", padding: "0.5rem 0" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#1a1a1a")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#6b6b6b")
          }
        >
          <span style={{ marginRight: "0.4rem" }}>←</span>Zurück
        </button>

        {/* Top section — two columns */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left — image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                minHeight: "500px",
                borderRadius: "16px",
              }}
            >
              <Image
                src={product.imageDark}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span
              className="font-[var(--font-inter)] uppercase text-[#6b6b6b]"
              style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              {product.category}
            </span>

            <h1
              className="font-[var(--font-inter)] font-light text-[#1a1a1a] mt-2"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1 }}
            >
              {product.name}
            </h1>

            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#1a3a2a",
                margin: "1.5rem 0",
              }}
            />

            <p
              className="font-[var(--font-inter)] text-[#6b6b6b]"
              style={{ fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}
            >
              {product.description}
            </p>

            {/* Size selector */}
            <div>
              <span
                className="block font-[var(--font-inter)] uppercase text-[#6b6b6b] mb-3"
                style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
              >
                Größe wählen
              </span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const isActive = activeSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className="font-[var(--font-inter)] text-[0.8rem] px-4 py-2 rounded-[6px] transition-colors duration-150"
                      style={{
                        background: isActive ? "#1a3a2a" : "transparent",
                        color: isActive ? "#ffffff" : "#6b6b6b",
                        border: isActive
                          ? "0.5px solid #1a3a2a"
                          : "0.5px solid #e8e8e8",
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Badge */}
            <div style={{ marginTop: "2rem" }}>
              <span
                className="inline-block font-[var(--font-inter)] uppercase tracking-[0.1em] text-[#1a3a2a] bg-[#e8f0ea]"
                style={{
                  fontSize: "0.65rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "4px",
                }}
              >
                Bald verfügbar
              </span>
            </div>
          </motion.div>
        </div>

        {/* Ingredients section */}
        {product.ingredients.length > 0 && (
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              style={{
                background: "#f9faf9",
                borderRadius: "12px",
                padding: "clamp(1.5rem, 4vw, 2rem) clamp(1.5rem, 4vw, 3rem)",
              }}
            >
              <h2
                className="font-[var(--font-inter)] font-light text-[#1a1a1a]"
                style={{ fontSize: "2rem", marginBottom: "2rem" }}
              >
                Inhaltsstoffe
              </h2>

              <div>
                {product.ingredients.map((ing, i) => (
                  <div
                    key={ing.name}
                    className="font-[var(--font-inter)]"
                    style={{
                      padding: "1rem 0",
                      borderBottom:
                        i < product.ingredients.length - 1
                          ? "0.5px solid #e8f0ea"
                          : "none",
                    }}
                  >
                    <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a1a1a" }}>
                      {ing.name}
                    </span>
                    <span style={{ color: "#6b6b6b", margin: "0 0.5rem" }}>—</span>
                    <span style={{ fontSize: "0.85rem", color: "#6b6b6b", lineHeight: 1.6 }}>
                      {ing.effect}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
