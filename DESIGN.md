# VALDÉ — Design System

## Ästhetik
Clean & minimal. Weiß dominiert, Waldgrün als Akzent.
Inspiriert von The Ordinary und CeraVe — aber mit mehr Charakter.
Das Produkt ist der Star. Die Website tritt zurück.

## Grundprinzipien
- Viel Weißraum — nie überladen
- Große, ruhige Typografie
- Produkte freigestellt auf weißem Hintergrund
- Waldgrün nur für Buttons, Badges, Linien, Hover
- Keine dunklen Hintergründe auf der Website

## Farb-Einsatz
- Hintergrund: #ffffff
- Fließtext: #1a1a1a
- Subtext / Labels: #6b6b6b
- Primär-Button: #1a3a2a, Text weiß
- Badge "Bald verfügbar": #e8f0ea Hintergrund, #1a3a2a Text
- Trennlinien: #e8f0ea
- Gold (#b8956a): nur für Logo-Akzente, sehr sparsam

## Typografie
- Hero-Titel: Cormorant Garamond, clamp(3rem, 10vw, 8rem), letter-spacing 0.2em
- Section-Headlines: Cormorant Garamond, 2.5–3.5rem, light
- Produktnamen: DM Sans, 1rem, medium 500
- Beschreibungen: DM Sans, 0.9rem, regular, #6b6b6b
- Badges / Labels: DM Sans, 0.65rem, uppercase, letter-spacing 0.15em

## Abstände
- Section Padding vertikal: 8rem (desktop), 4rem (mobile)
- Produktkarten Gap: 1.5rem
- Max-Width: 1200px, zentriert

## Animationen
- GSAP + ScrollTrigger: Scroll-Animationen
- Framer Motion: Hover & Entrance-Effekte
- Hero: Flasche scrollt von unten rein, dreht sich ~15 Grad, Text faded ein
- Produkte: abwechselnd von links und rechts reinkommend
- Hover Produktkarte: scale(1.02), Border wird grüner
- Prinzip: langsam, intentional — nichts bouncy

## Produktkarten
- Hintergrund: #ffffff
- Border: 0.5px solid #e8e8e8
- Border-Radius: 12px
- Bild: freigestellt, weißer Hintergrund, zentriert
- Größenauswahl: kleine Buttons (z.B. 30ml | 50ml)
- Badge: "Bald verfügbar"
- Hover: scale(1.02), border-color #1a3a2a

## Navigation
- Sticky, transparent beim Start
- Beim Scrollen: weißer Hintergrund + 0.5px border-bottom
- Links: VALDÉ Logo (Cormorant Garamond)
- Rechts: Produkte | Über uns | Waitlist-Button
- Mobile: Hamburger-Menü

## Responsive
- Mobile-first
- Grid: 4 Spalten → 2 Spalten (tablet) → 1 Spalte (mobile)

## Geplantes Upgrade Phase 2
- Three.js für echte 3D-Produktmodelle (.glb)
- Valdé Skin Quiz (5 Fragen → persönliches Produkt-Set)