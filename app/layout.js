import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "high-haseeb",
  description: "this website is a reflection of who i am and what i take interest in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar`}>{children}</body>
    </html>
  );
}
