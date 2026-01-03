import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <Header />
        <main className="pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
