import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investment Portfolio Analyzer | ₹1,50,000 Allocation",
  description: "Smart investment allocation across market sectors, ETFs, and cryptocurrencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
