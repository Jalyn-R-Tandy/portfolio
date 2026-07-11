import { ProjectCard } from "@/components/ui/ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section className="py-16 max-w-4xl mx-auto text-center">
      <h1 className="font-bold text-3xl mb-8">Things I&apos;ve Worked On...</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            status={project.status as "completed" | "coming-soon"}
          />
        ))}
      </div>
    </section>
  );
}
