import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const coolvetica = localFont({
  src: "../public/fonts/bebas/BebasNeue-Regular.ttf",
  variable: "--font-coolvetica",
});
const meditative = localFont({
  src: "../public/fonts/meditative/Meditative.ttf",
  variable: "--font-meditative",
})
const boring = localFont({
  src: [
    {path: "../public/fonts/nimbus/NimbusSans-Bold.ttf", weight: '500', style: 'bold'},
    {path: "../public/fonts/nimbus/NimbusSans-Regular.ttf", weight: '300', style: 'regular'},
    {path: "../public/fonts/nimbus/NimbusSans-BoldItalic.ttf", weight: '500', style: 'italic'},
  ],
  variable: "--font-boring",
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
