import type { Metadata } from "next";
import { playwrite, poppins } from "./fonts";
import "./globals.css";

import Navbar from "./components/Navbar";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";



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
