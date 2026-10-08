import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    { path: "../fonts/geist/geist-variable.woff2", weight: "400 600", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Caonyx templates", template: "%s · Caonyx templates" },
  description: "Gallery of website templates. Each template reads its own DESIGN.md and PRODUCT.md.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
