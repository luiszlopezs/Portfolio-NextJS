import type { Metadata } from "next";
import { playwrite, poppins } from "./fonts";
import "./globals.css";

import Navbar from "./components/Navbar";
import { Title } from "./components/Title";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${playwrite.variable}  antialiased`}>
        <Title />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
