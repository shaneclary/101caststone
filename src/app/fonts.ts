import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400","500","600"]
});

export const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500","600"]
});
