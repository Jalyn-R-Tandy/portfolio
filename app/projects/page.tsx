import { Section } from "@/components/ui/Section"
import { ProjectCard } from "@/components/ui/ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Betting Analytics Automation",
      description: "An automated bankroll management engine that leverages web scraping to aggregate real-time odds, enabling data-driven decision-making through high-probability bet identification and historical trend analysis.",
      tags: ["Python", "BeautifulSoup"],
      link: "https://github.com/Jalyn-R-Tandy/portfolio",
      status: "completed"
    },
    {
      title: "Personal Knowledge AI Assistant",
      description: "A RAG-based (Retrieval-Augmented Generation) AI assistant designed to index, search, and synthesize personal documentation and notes. It provides context-aware answers by querying a vectorized knowledge base.",
      tags: ["Python", "BeautifulSoup"],
      link: "https://github.com/Jalyn-R-Tandy/portfolio",
      status: "coming-soon"
    },
    {
      title: "AI Documentation Generator",
      description: "A specialized editor that streamlines technical writing by automating documentation generation and formatting. It uses AI to translate raw code snippets and comments into clean, professional documentation structures.",
      tags: ["Python", "BeautifulSoup"],
      link: "https://github.com/Jalyn-R-Tandy/portfolio",
      status: "coming-soon"
    },
  ]

  return (
    <Section>
      <h1 className="font-bold text-3xl mb-8">Things I&apos;ve Worked On...</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl">
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
    </Section>
  );
}
