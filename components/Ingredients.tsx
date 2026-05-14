"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Hautpflege" | "Bartpflege";

interface Ingredient {
  name: string;
  effect: string;
}

interface ProductIngredients {
  product: string;
  ingredients: Ingredient[];
}

const HAUTPFLEGE: ProductIngredients[] = [
  {
    product: "Face Cleanser",
    ingredients: [
      { name: "Salicylsäure", effect: "Bekämpft Unreinheiten und befreit verstopfte Poren" },
      { name: "Aloe Vera", effect: "Beruhigt und hydratisiert die Haut nach der Reinigung" },
      { name: "Coco-Glucoside", effect: "Mildes pflanzliches Tensid, reinigt ohne zu reizen" },
      { name: "Panthenol", effect: "Beruhigt gereizte Haut, Provitamin B5" },
    ],
  },
  {
    product: "Face Serum",
    ingredients: [
      { name: "Hyaluronsäure", effect: "Bindet Feuchtigkeit tief in der Haut" },
      { name: "Niacinamid", effect: "Verfeinert Poren, reguliert Talgproduktion" },
      { name: "Vitamin C", effect: "Hellt auf, schützt vor freien Radikalen" },
      { name: "Hagebuttenöl", effect: "Natürliches Retinol-Äquivalent, reich an Vitamin A & C" },
      { name: "Betain", effect: "Stärkt die Hautbarriere, natürlich aus Zuckerrüben" },
    ],
  },
  {
    product: "Moisturizer",
    ingredients: [
      { name: "Jojobaöl", effect: "Imitiert den natürlichen Talg, reguliert Ölproduktion" },
      { name: "Sheabutter", effect: "Bindet Feuchtigkeit, verbessert Hauttextur" },
      { name: "Ceramide", effect: "Repariert die Hautbarriere" },
      { name: "Squalan", effect: "Ultraleicht, nicht komedogen, sofort absorbierend" },
      { name: "Aloe Vera", effect: "Als Basisflüssigkeit, beruhigend und hydratisierend" },
    ],
  },
];

const BARTPFLEGE: ProductIngredients[] = [
  {
    product: "Bartöl",
    ingredients: [
      { name: "Arganöl", effect: "Reich an Vitamin E, nährt Haut und Haar" },
      { name: "Jojobaöl", effect: "Reduziert Spliss, gibt dem Bart ein volleres Erscheinungsbild" },
      { name: "Castoröl", effect: "Nährt Haarfollikel, feuchtigkeitsspendend" },
      { name: "Süßmandelöl", effect: "Verbessert Bartstruktur und Kämmbarkeit" },
      { name: "Vitamin E", effect: "Antioxidans, schützt und stärkt" },
    ],
  },
  {
    product: "Rosmarinöl",
    ingredients: [
      { name: "Rosmarinöl", effect: "Regt Durchblutung an, fördert Bartwachstum" },
      { name: "Castoröl", effect: "Effektives Trägeröl, schützt Haarfasern vor Bruch" },
      { name: "Pfefferminzöl", effect: "Stimuliert Haarfollikel zusätzlich" },
      { name: "Thymianöl", effect: "Unterstützt natürliches Bartwachstum" },
      { name: "Jojobaöl", effect: "Stabilisiert das Konzentrat, optimal verträglich" },
    ],
  },
];

const CATEGORIES: Category[] = ["Hautpflege", "Bartpflege"];


function ProductColumn({
  data,
  index,
}: {
  data: ProductIngredients;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
    >
      <span
        className="block font-[var(--font-inter)] uppercase text-[#1a3a2a]"
        style={{ fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "1.5rem" }}
      >
        {data.product}
      </span>

      <div>
        {data.ingredients.map((ing, i) => (
          <div
            key={ing.name}
            className="font-[var(--font-inter)]"
            style={{
              padding: "0.8rem 0",
              borderBottom: i < data.ingredients.length - 1 ? "0.5px solid #e8f0ea" : "none",
            }}
          >
            <span
              style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a1a1a" }}
            >
              {ing.name}
            </span>
            <span style={{ color: "#6b6b6b", margin: "0 0.5rem" }}>—</span>
            <span
              style={{ fontSize: "0.85rem", color: "#6b6b6b", lineHeight: 1.6 }}
            >
              {ing.effect}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Ingredients() {
  const [activeCategory, setActiveCategory] = useState<Category>("Hautpflege");

  const products = activeCategory === "Hautpflege" ? HAUTPFLEGE : BARTPFLEGE;

  return (
    <section
      id="inhaltsstoffe"
      className="w-full bg-white px-6"
      style={{ paddingTop: "clamp(4rem, 8vw, 8rem)", paddingBottom: "clamp(4rem, 8vw, 8rem)" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <span
          className="block font-[var(--font-inter)] uppercase text-[#6b6b6b]"
          style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
        >
          Formulierung
        </span>

        <h2
          className="font-[var(--font-inter)] font-light text-[#1a1a1a] mt-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2 }}
        >
          Kein Geheimnis — nur gute Inhaltsstoffe.
        </h2>

        <p
          className="font-[var(--font-inter)] text-[#6b6b6b] mt-4"
          style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
        >
          Wir kommunizieren offen was in unseren Produkten steckt und warum.
        </p>

        {/* Divider */}
        <div style={{ height: "1px", background: "#e8f0ea", margin: "3rem 0" }} />

        {/* Category tabs */}
        <div className="flex gap-8 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-[var(--font-inter)] text-[0.85rem] tracking-[0.05em] pb-2 transition-colors duration-200"
                style={{
                  color: isActive ? "#1a1a1a" : "#6b6b6b",
                  borderBottom: isActive
                    ? "1.5px solid #1a3a2a"
                    : "1.5px solid transparent",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product columns */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeCategory === "Hautpflege" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                {products.map((data, i) => (
                  <ProductColumn key={data.product} data={data} index={i} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 md:max-w-[800px] mx-auto">
                  {products.map((data, i) => (
                    <ProductColumn key={data.product} data={data} index={i} />
                  ))}
                </div>

                {/* Bartroller note */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-[var(--font-inter)] text-[#6b6b6b] italic text-center mt-12"
                  style={{ fontSize: "0.85rem" }}
                >
                  Bartroller — Kein Inhaltsstoff. Optimale Wirkung in Kombination mit dem Rosmarinöl.
                </motion.p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
