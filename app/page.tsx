import About from "@/components/pages/About";
import Experience from "@/components/pages/Experience";
import Projects from "@/components/pages/Projects";
import { Section } from "@/components/ui/Section"

export default function Home() {
  return (
    <>
      {/* hero section */}
      <Section id="home">
        <h2 className="font-bold text-2xl">Hero Section</h2>
      </Section>

      <About />
      <Experience />
      <Projects />
    </>
  );
}
