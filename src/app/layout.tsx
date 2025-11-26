import type { Metadata } from "next";
import { playwrite, poppins } from "./fonts";
import "./globals.css";

import Navbar from "./components/Navbar";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";

//recomendacion gpt
export const metadata: Metadata = {
  title: "Luis López - Portfolio",
  description: "Portafolio de Luis López, desarrollador con experiencia en Java, Python, web y más.",
  openGraph: {
    title: "Luis López - Portfolio",
    description: "Proyectos, skills y certificados de Luis López.",
    url: "https://tu-dominio-o-vercel-url",
    siteName: "Portafolio Luis López",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="scroll-smooth">
      <body className={`${poppins.className} ${playwrite.variable}  antialiased`}>
        <Title />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
