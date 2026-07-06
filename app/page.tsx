import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { GrProjects } from "react-icons/gr"
import { BsDownload } from "react-icons/bs";

export default function Home() {
  return (
    <Section>
      {/** introduction */}
      <h1 className="font-bold text-6xl sm:text-7xl mb-4">Hi, I&apos;m Jalyn Tandy</h1>
      <h2 className="text-2xl mb-8">Computer Science | Iowa State University</h2>
      <p className="text-xl mb-12 max-w-3xl text-center">Passionate about building scalable software solutions and exploring the intersection of modern web development and data-driven systems.</p>

      {/** cta buttons */}
      <div className="flex gap-4">
        <Button href="/projects" Icon={GrProjects} label="View Projects" color="bg-steel-blue text-surface" isDownload={false} />
        <Button href="/resume.pdf" Icon={BsDownload} label="Download Resume" color="border border-gray-500/20" isDownload />
      </div>
    </Section>
  );
}
