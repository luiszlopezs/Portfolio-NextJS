import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsRegular400 = Poppins({
  variable: "--font-poppins-regular-400",
  subsets: ["latin"],
  weight: "400",
});





export const metadata: Metadata = {
  title: "Portfolio Luis",
  description: "Info about Luis López",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegular400.variable} ${poppinsRegular400.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
