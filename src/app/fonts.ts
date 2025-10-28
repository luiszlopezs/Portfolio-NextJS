import { Poppins, Playwrite_DE_SAS } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const playwrite = Playwrite_DE_SAS({
  weight: ["400"],
  variable: "--font-playwrite",
});
