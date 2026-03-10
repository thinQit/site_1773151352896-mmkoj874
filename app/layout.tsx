import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "site_1773151352896",
  description: "Built with Codex",
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
