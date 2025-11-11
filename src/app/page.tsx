import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Separator from "./components/Separator";
import Skills from "./components/Skills";
import { Certificate } from "crypto";
import Certificates from "./components/Certificates";


export default function Home() {
  const name = "Luis";
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      
    </main>
  );
}
