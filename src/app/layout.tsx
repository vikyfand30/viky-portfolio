import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viky Fandreano | Mobile Developer Portfolio",
  description: "Professional portfolio of Viky Fandreano, Mobile Developer with 6+ years experience building iOS and Android apps.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
