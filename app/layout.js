import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const opens = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata = {
  title: "high-haseeb",
  description:
    "this website is a reflection of who i am and what i take interest in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
