import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roto Pak | Plastic Film & Roll Manufacturing",
  description: "Manufacturer of plastic rolls and films for food packaging, cooking, and industrial applications. Παραγωγή πλαστικών ρολών και μεμβρανών.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
