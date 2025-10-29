import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Separator from "./components/Separator";
import Footer from "./components/Footer";


export default function Home() {
  const name = "Luis";
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
