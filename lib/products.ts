export interface Ingredient {
  name: string;
  effect: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  sizes: string[];
  image: string;
  imageDark: string;
  description: string;
  ingredients: Ingredient[];
}

export const products: Product[] = [
  {
    slug: "face-cleanser",
    name: "Face Cleanser",
    category: "Hautpflege",
    sizes: ["50ml", "150ml", "250ml"],
    image: "/images/products/Face Cleanser OH.png",
    imageDark: "/images/dark/Face Cleanser.png",
    description:
      "Sanfte aber effektive Reinigung für den modernen Mann. Salicylsäure befreit verstopfte Poren und bekämpft Unreinheiten. Aloe Vera beruhigt die Haut nach der Reinigung. Die perfekte Basis für deine tägliche Routine.",
    ingredients: [
      { name: "Salicylsäure", effect: "Bekämpft Unreinheiten und befreit verstopfte Poren" },
      { name: "Aloe Vera", effect: "Beruhigt und hydratisiert die Haut nach der Reinigung" },
      { name: "Coco-Glucoside", effect: "Mildes pflanzliches Tensid, reinigt ohne zu reizen" },
      { name: "Panthenol", effect: "Beruhigt gereizte Haut, Provitamin B5" },
    ],
  },
  {
    slug: "face-serum",
    name: "Face Serum",
    category: "Hautpflege",
    sizes: ["15ml", "30ml"],
    image: "/images/products/Face Serum OH.png",
    imageDark: "/images/dark/Face Serum.png",
    description:
      "Hochkonzentrierte Wirkstoffe für sichtbare Ergebnisse. Hyaluronsäure bindet Feuchtigkeit tief in der Haut. Vitamin C schützt vor freien Radikalen und vereinheitlicht den Teint — sichtbar nach wenigen Wochen.",
    ingredients: [
      { name: "Hyaluronsäure", effect: "Bindet Feuchtigkeit tief in der Haut" },
      { name: "Niacinamid", effect: "Verfeinert Poren, reguliert Talgproduktion" },
      { name: "Vitamin C", effect: "Hellt auf, schützt vor freien Radikalen" },
      { name: "Hagebuttenöl", effect: "Natürliches Retinol-Äquivalent, reich an Vitamin A & C" },
      { name: "Betain", effect: "Stärkt die Hautbarriere, natürlich aus Zuckerrüben" },
    ],
  },
  {
    slug: "moisturizer",
    name: "Moisturizer",
    category: "Hautpflege",
    sizes: ["50ml", "100ml", "200ml"],
    image: "/images/products/Moisturizer OH.png",
    imageDark: "/images/dark/Moisturizer.png",
    description:
      "Leichte Tagespflege die sofort einzieht. Jojobaöl imitiert den natürlichen Talg der Haut. Ceramide reparieren die Hautbarriere. Nicht fettig — der perfekte letzte Schritt.",
    ingredients: [
      { name: "Jojobaöl", effect: "Imitiert den natürlichen Talg, reguliert Ölproduktion" },
      { name: "Sheabutter", effect: "Bindet Feuchtigkeit, verbessert Hauttextur" },
      { name: "Ceramide", effect: "Repariert die Hautbarriere" },
      { name: "Squalan", effect: "Ultraleicht, nicht komedogen, sofort absorbierend" },
      { name: "Aloe Vera", effect: "Beruhigend und hydratisierend" },
    ],
  },
  {
    slug: "bartoel",
    name: "Bartöl",
    category: "Bartpflege",
    sizes: ["30ml", "50ml"],
    image: "/images/products/Bartöl OH.png",
    imageDark: "/images/dark/Bartöl.png",
    description:
      "Pflegt und konditioniert den Bart von innen. Arganöl nährt Haut und Haar. Jojobaöl gibt dem Bart ein volleres Erscheinungsbild. Reduziert Juckreiz und gibt natürlichen Glanz.",
    ingredients: [
      { name: "Arganöl", effect: "Reich an Vitamin E, nährt Haut und Haar" },
      { name: "Jojobaöl", effect: "Reduziert Spliss, gibt dem Bart ein volleres Erscheinungsbild" },
      { name: "Castoröl", effect: "Nährt Haarfollikel, feuchtigkeitsspendend" },
      { name: "Süßmandelöl", effect: "Verbessert Bartstruktur und Kämmbarkeit" },
      { name: "Vitamin E", effect: "Antioxidans, schützt und stärkt" },
    ],
  },
  {
    slug: "rosmarinoel",
    name: "Rosmarinöl",
    category: "Bartpflege",
    sizes: ["30ml", "100ml"],
    image: "/images/products/Rosmarinöl OH.png",
    imageDark: "/images/dark/Rosmarinöl.png",
    description:
      "Fördert natürliches Bartwachstum durch verbesserte Durchblutung. Rosmarinöl regt die Haarfollikel an. Optimal in Kombination mit dem Bartroller für maximale Wirkung.",
    ingredients: [
      { name: "Rosmarinöl", effect: "Regt Durchblutung an, fördert Bartwachstum" },
      { name: "Castoröl", effect: "Effektives Trägeröl, schützt Haarfasern vor Bruch" },
      { name: "Pfefferminzöl", effect: "Stimuliert Haarfollikel zusätzlich" },
      { name: "Thymianöl", effect: "Unterstützt natürliches Bartwachstum" },
      { name: "Jojobaöl", effect: "Stabilisiert das Konzentrat, optimal verträglich" },
    ],
  },
  {
    slug: "bartroller",
    name: "Bartroller",
    category: "Bartpflege",
    sizes: ["Einheitsgröße"],
    image: "/images/products/Bartroller OH.png",
    imageDark: "/images/dark/Bartroller.png",
    description:
      "Derma-Roller für maximales Bartwachstum. Aktiviert Haarfollikel durch gezielte Mikrostimulation. Optimale Wirkung in Kombination mit dem Rosmarinöl — zusammen das stärkste Duo für Bartwachstum.",
    ingredients: [],
  },
];
