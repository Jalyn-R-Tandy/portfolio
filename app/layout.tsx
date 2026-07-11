import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="min-h-screen flex flex-col bg-surface text-text-main">
        <Navbar />
        <main className="flex flex-1 justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
