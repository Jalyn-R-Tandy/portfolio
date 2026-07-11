import { TechCard } from "@/components/ui/TechCarch"

export default function About() {
  return (
    <div className="py-16 max-w-4xl mx-auto">
      <div className="mb-16 p-2">
        <h2 className="font-bold text-center text-3xl mb-16">About Me</h2>
        <div className="mb-12">
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">I am a Computer Science student and Technology Consultant with a focus on automation and data-driven software. I combine a consultant&apos;s mindset with a developer&apos;s toolkit to solve real-world problems. From optimizing city transit data to building AI-assisted developer tools, I thrive on building systems that scale. Currently building at Iowa State.</p>
        </div>
      </div>

      <h2 className="font-bold text-center text-3xl mb-16">Tech I Work With</h2>
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <TechCard logo="/python.svg" title="Python" />
          <TechCard logo="/java.svg" title="Java" />
          <TechCard logo="/react.svg" title="React" />
          <TechCard logo="/javascript.svg" title="JavaScript" />
          <TechCard logo="/tailwindcss.svg" title="TailwindCSS" />
        </div>
      </div>
    </div>
  );
}
