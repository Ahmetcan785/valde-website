import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ritual from "@/components/Ritual";
import BeardSection from "@/components/BeardSection";
import Products from "@/components/Products";
import WhyValde from "@/components/WhyValde";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ritual />
        <BeardSection />
        <Products />
        <WhyValde />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
