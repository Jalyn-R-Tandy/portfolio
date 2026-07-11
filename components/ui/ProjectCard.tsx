import { FiExternalLink } from "react-icons/fi";

export function ProjectCard({ title, description, tags, link, status }: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status?: "completed" | "coming-soon";
}) {
  const isComingSoon = status === "coming-soon"

  return (
    <div className="group flex flex-col h-full justify-between min-h-72 py-8 px-6 border border-text-main/20 rounded-xl">

      {/** top half of project card */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        {/** optional styling for unfinished projects */}
        {isComingSoon && (
          <span className="mt-2 px-2 py-1 text-xs uppercase font-bold bg-gray-200 text-gray-500 rounded">
            Coming Soon
          </span>
        )}
        <p className="mt-2 text-sm text-text-main/80">{description}</p>
      </div>

      {/** bottom half of project card */}
      {!isComingSoon && (
        <div className="flex flex-col">
          <div className="mt-4 mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-accent/50 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer"  className="flex gap-2 hover:text-text-subtle transition">
            View Project
            <FiExternalLink size={20} />
          </a>
        </div>
      )}
    </div>
  )
}