import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-surface text-text-main">
        <Navbar />
        <main className="flex flex-1 justify-center items-stretch">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
