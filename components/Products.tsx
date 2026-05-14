"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Category = "Hautpflege" | "Bartpflege";

interface Product {
  id: number;
  slug: string;
  name: string;
  category: Category;
  sizes: string[];
  description: string;
  image: string;
  wrapperStyle?: React.CSSProperties;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "face-cleanser",
    name: "Face Cleanser",
    category: "Hautpflege",
    sizes: ["50ml", "150ml", "250ml"],
    description: "Reinigt gründlich ohne auszutrocknen. Salicylsäure + Grüntee-Extrakt.",
    image: "/images/products/Face Cleanser OH.png",
  },
  {
    id: 2,
    slug: "face-serum",
    name: "Face Serum",
    category: "Hautpflege",
    sizes: ["15ml", "30ml"],
    description: "Füllt, schützt und erneuert. Hyaluronsäure + Vitamin C.",
    image: "/images/products/Face Serum OH.png",
  },
  {
    id: 3,
    slug: "moisturizer",
    name: "Moisturizer",
    category: "Hautpflege",
    sizes: ["50ml", "100ml", "200ml"],
    description: "Leichte Tagespflege. Niacinamid + Ceramide.",
    image: "/images/products/Moisturizer OH.png",
  },
  {
    id: 4,
    slug: "bartoel",
    name: "Bartöl",
    category: "Bartpflege",
    sizes: ["30ml", "50ml"],
    description: "Pflegt und konditioniert. Reduziert Juckreiz.",
    image: "/images/products/Bartöl OH.png",
  },
  {
    id: 5,
    slug: "rosmarinoel",
    name: "Rosmarinöl",
    category: "Bartpflege",
    sizes: ["30ml", "100ml"],
    description: "Unterstützt natürliches Bartwachstum.",
    image: "/images/products/Rosmarinöl OH.png",
  },
  {
    id: 6,
    slug: "bartroller",
    name: "Bartroller",
    category: "Bartpflege",
    sizes: ["Einheitsgröße"],
    description: "Aktiviert Haarfollikel. Ideal mit Rosmarinöl.",
    image: "/images/products/Bartroller OH.png",
    wrapperStyle: { transform: "rotate(90deg)", transformOrigin: "center" },
  },
];

const CATEGORIES: Category[] = ["Hautpflege", "Bartpflege"];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [activeSize, setActiveSize] = useState(product.sizes[0]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    console.log(`[ProductCard] useEffect running for: ${product.name} (index ${index})`);

    gsap.set(el, { opacity: 0, y: 60 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        console.log(`[ProductCard] ScrollTrigger onEnter: ${product.name}`);
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.12,
          ease: "power2.out",
        });
      },
    });

    return () => trigger.kill();
  }, [index, product.name]);

  return (
    <div ref={wrapperRef}>
      <Link href={`/produkte/${product.slug}`} className="block h-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group relative bg-[#ffffff] rounded-[12px] p-6 flex flex-col cursor-pointer h-full"
          style={{
            border: "0.5px solid #e8e8e8",
            transition: "border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "#1a3a2a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "#e8e8e8";
          }}
        >
          {/* Product image */}
          <div
            className="relative w-full rounded-[8px] bg-[#ffffff] overflow-hidden"
            style={{ aspectRatio: "3 / 4" }}
          >
            <div className="absolute inset-0" style={product.wrapperStyle}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Card body */}
          <div className="flex flex-col flex-1 mt-4">
            <span className="font-[var(--font-inter)] uppercase tracking-[0.15em] text-[#6b6b6b]" style={{ fontSize: "0.7rem", fontWeight: 500 }}>
              {product.category}
            </span>

            <h3 className="font-[var(--font-inter)] text-[#1a1a1a] mt-1" style={{ fontSize: "1.05rem", fontWeight: 400 }}>
              {product.name}
            </h3>

            <div
              className="flex flex-wrap gap-1.5 mt-4"
              onClick={(e) => e.preventDefault()}
            >
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSize(size);
                  }}
                  className="font-[var(--font-inter)] text-[0.7rem] px-2.5 py-1 rounded-[4px] transition-colors duration-150"
                  style={{
                    border: `0.5px solid ${activeSize === size ? "#1a3a2a" : "#e8e8e8"}`,
                    color: activeSize === size ? "#1a3a2a" : "#6b6b6b",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <span className="inline-block font-[var(--font-inter)] text-[0.65rem] uppercase tracking-[0.1em] text-[#1a3a2a] bg-[#e8f0ea] px-[0.8rem] py-[0.3rem] rounded-[4px]">
                Bald verfügbar
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category>("Hautpflege");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "bartpflege") {
      setActiveCategory("Bartpflege");
    }
  }, [searchParams]);

  const filtered = PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="produkte" className="w-full bg-[#ffffff] py-16 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        <span className="block font-[var(--font-inter)] uppercase" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.25em", color: "#1a3a2a", marginBottom: "0.75rem" }}>
          Das Sortiment
        </span>

        <h2
          className="font-[var(--font-inter)] text-[#1a1a1a] mt-3"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 400 }}
        >
          Entwickelt für den modernen Mann.
        </h2>

        <div className="w-full h-px bg-[#e8f0ea] my-12" />

        {/* Category tabs */}
        <div className="mb-10" style={{ display: "inline-flex", background: "#f0f0f0", borderRadius: "999px", padding: "4px" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-[var(--font-inter)]"
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "999px",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: isActive ? "#ffffff" : "transparent",
                  color: isActive ? "#1a1a1a" : "#6b6b6b",
                  boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  border: "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

export default function Products() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}
