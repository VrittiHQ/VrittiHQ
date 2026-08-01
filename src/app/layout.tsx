import type { Metadata } from "next";
import "./marketing.css";

export const metadata: Metadata = {
  title: "VrittiHR — AI Workforce Management",
  description:
    "The modern workforce management platform for Indian educational institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
