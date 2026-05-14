"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Step {
  number: string;
  word: string;
  product: string;
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;
}

const STEPS: Step[] = [
  {
    number: "01",
    word: "Reinigen",
    product: "Face Cleanser",
    title: "Starte den Tag mit einer sauberen Basis.",
    description:
      "Salicylsäure befreit verstopfte Poren und bekämpft Unreinheiten. Aloe Vera beruhigt die Haut nach der Reinigung. Die perfekte Basis für deine Routine.",
    image: "/images/products/Face Cleanser OH.png",
    imageLeft: true,
  },
  {
    number: "02",
    word: "Aktivieren",
    product: "Face Serum",
    title: "Aktiviere deine Haut mit gezielten Wirkstoffen.",
    description:
      "Hyaluronsäure bindet Feuchtigkeit tief in der Haut. Vitamin C schützt vor freien Radikalen und vereinheitlicht den Teint — sichtbar nach wenigen Wochen.",
    image: "/images/products/Face Serum OH.png",
    imageLeft: false,
  },
  {
    number: "03",
    word: "Pflegen",
    product: "Moisturizer",
    title: "Schütze und versiegle für den ganzen Tag.",
    description:
      "Jojobaöl imitiert den natürlichen Talg der Haut. Ceramide reparieren die Hautbarriere. Leicht, nicht fettig — zieht sofort ein.",
    image: "/images/products/Moisturizer OH.png",
    imageLeft: true,
  },
];

function StepText({ step }: { step: Step }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <span
          className="font-[var(--font-inter)]"
          style={{ fontSize: "2rem", fontWeight: 300, color: "#1a1a1a" }}
        >
          {step.number} —
        </span>
        <span
          className="font-[var(--font-inter)]"
          style={{ fontSize: "2rem", fontWeight: 300, color: "#1a1a1a" }}
        >
          {step.word}
        </span>
      </div>

      <p
        className="font-[var(--font-inter)]"
        style={{ fontSize: "2.8rem", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "0.75rem" }}
      >
        {step.product}
      </p>

      <p
        className="font-[var(--font-inter)]"
        style={{ fontSize: "0.9rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "0.75rem" }}
      >
        {step.title}
      </p>

      <p
        className="font-[var(--font-inter)]"
        style={{ fontSize: "0.88rem", fontWeight: 300, color: "#6b6b6b", lineHeight: 1.8 }}
      >
        {step.description}
      </p>
    </div>
  );
}

function StepRow({ step, isLast }: { step: Step; isLast: boolean }) {
  const imageBlock = (
    <motion.div
      className="flex-1 flex items-center justify-center"
      initial={{ opacity: 0, x: step.imageLeft ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="relative w-full bg-white"
        style={{ maxHeight: "380px", height: "380px" }}
      >
        <Image
          src={step.image}
          alt={step.product}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      className="flex-1 flex flex-col justify-center"
      initial={{ opacity: 0, x: step.imageLeft ? 48 : -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <StepText step={step} />
    </motion.div>
  );

  return (
    <>
      {/* Desktop row */}
      <div
        className="hidden md:flex items-center"
        style={{ minHeight: "400px", gap: "6rem" }}
      >
        {step.imageLeft ? imageBlock : textBlock}
        {step.imageLeft ? textBlock : imageBlock}
      </div>

      {/* Mobile column — image top, text bottom */}
      <div className="flex flex-col gap-8 md:hidden">
        <div className="relative w-full bg-white" style={{ maxHeight: "280px", height: "280px" }}>
          <Image
            src={step.image}
            alt={step.product}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <StepText step={step} />
      </div>

      {!isLast && <div className="w-full h-px bg-[#e8f0ea]" />}
    </>
  );
}

export default function Ritual() {
  return (
    <section id="ritual" className="w-full bg-white py-16 md:py-32 px-6">
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>

        <span
          className="block font-[var(--font-inter)] uppercase"
          style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.25em", color: "#1a3a2a", marginBottom: "0.75rem" }}
        >
          Das Ritual
        </span>

        <h2
          className="font-[var(--font-inter)] mt-3"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, color: "#1a1a1a" }}
        >
          Drei Schritte. Jeden Morgen.
        </h2>

        <div className="w-full h-px bg-[#e8f0ea]" style={{ margin: "3rem 0" }} />

        <div className="flex flex-col gap-16 md:gap-20">
          {STEPS.map((step, i) => (
            <StepRow key={step.label} step={step} isLast={i === STEPS.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
}
