import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitclub",
  icons: { icon: [{ url: "./bx--dumbbell.ico" }] },

  // Implementação de Open Graph para compartilhamento de conteúdo e meta tags entre plataformas de mídia social
  openGraph: {
    title: "Fitclub",
    description: "Best fitness in the town",
    type: "website",
    siteName: "Fitclub"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
