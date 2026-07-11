import { Button } from "@/components/ui/Button"
import { GrProjects } from "react-icons/gr"
import { BsDownload } from "react-icons/bs";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center mx-auto py-20 min-h-[80vh] max-w-4xl">
      {/** introduction */}
      <h1 className="mb-4 text-5xl sm:text-6xl font-bold">Hi, I&apos;m Jalyn <br className="md:hidden"/>
      Tandy</h1>
      <h2 className="mb-8 text-2xl">Computer Science | Iowa State University</h2>
      <p className="text-lg p-2 md:text-xl mb-12 max-w-3xl text-center">Passionate about building scalable software solutions and exploring the intersection of modern web development and data-driven systems.</p>
      {/** cta buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/projects" Icon={GrProjects} label="View Projects" color="bg-steel-blue text-surface" isDownload={false} />
        <Button href="/resume.pdf" Icon={BsDownload} label="Download Resume" color="border border-gray-500/20" isDownload />
      </div>
    </section>
  );
}
