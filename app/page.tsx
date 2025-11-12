import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Mission from "./components/Mission";
import ProductShowcase from "./components/Products";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      {/* <Mission /> */}
      <ProductShowcase />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}
