import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import ProductShowcase from "./components/Products";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <About /> */}
      <ProductShowcase />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}
