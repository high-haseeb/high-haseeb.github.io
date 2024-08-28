import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const coolvetica = localFont({
  src: "../public/fonts/bebas/BebasNeue-Regular.ttf",
  variable: "--font-coolvetica",
});
const boring = localFont({
  src: "../public/fonts/NimbusSans-Bold.ttf",
  variable: "--font-boring",
})
const meditative = localFont({
  src: "../public/fonts/meditative/Meditative.ttf",
  variable: "--font-meditative",
})

export const metadata: Metadata = {
  title: "high-HASEEB",
  description: "Welcome to my playground! Let's goooo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${coolvetica.variable} ${boring.variable} ${meditative.variable} font-sans`}>{children}</body>
    </html>
  );
}
