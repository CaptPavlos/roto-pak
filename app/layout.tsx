import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROTOPACK IKE | Plastic Film & Roll Manufacturing",
  description: "ROTOPACK IKE - Manufacturer of plastic rolls and films for food packaging, cooking, and industrial applications. Παραγωγή πλαστικών ρολών και μεμβρανών. Αιγάλεω, Ελλάδα.",
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
