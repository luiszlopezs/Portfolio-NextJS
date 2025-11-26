import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";


export default function Home() {
  const name = "Luis";
  return (
    <main className="min-h-screen ">
      <Hero />
      <Certificates />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
