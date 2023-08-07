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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${inter.variable} ${opens.variable} no-scrollbar`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
