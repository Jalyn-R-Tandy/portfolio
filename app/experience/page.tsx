import { Section } from "@/components/ui/Section"
import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <Section>
      <h2 className="font-bold text-2xl mb-12">Experience</h2>
      <div className="space-y-12 bg-text-subtle/10 border border-text-main/20 rounded-md p-12">
        {experiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-12">

            {/** job date range */}
            <div className="md:col-span-1 text-sm font-medium text-text-main/80 uppercase tracking-wider">
              {experience.date}
            </div>

            {/** job details column */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold">{experience.company}</h3>
              <p className="mt-3 leading-relaxed text-text-main/90">{experience.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
