import type {Metadata} from "next";
import {Kanit} from "next/font/google";
import "./globals.css";

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "Hiveswap",
  description: "Hiveswap is the best-in-class SWAP in the Bitcoin ecosystem, utilizing the interoperable Bitcoin layer MAP Protocol for unmatched interoperability. It seamlessly connects assets on Bitcoin L1, the MAP Protocol interoperability layer, and all Bitcoin L2, revolutionizing asset swaps with comprehensive network coverage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
