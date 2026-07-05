import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/pages/About";
import Experience from "@/components/pages/Experience";
import Projects from "@/components/pages/Projects";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-papaya-whip">
        <Navbar />
        <main>
          {children}
        </main>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </body>
    </html>
  );
}
