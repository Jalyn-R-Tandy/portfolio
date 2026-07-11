import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <section className="p-4 md:p-24">
      <h2 className="font-bold text-center text-3xl mb-16">Experience</h2>
      <div className="space-y-12 bg-text-subtle/10 border border-text-main/20 rounded-md p-6">
        {experiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-12">
            {/** LEFT SIDE - company role */}
            <div className="md:col-span-8">
              <h3 className="text-lg font-semibold">
                {experience.company}
                &nbsp;
                &sdot;
                &nbsp;
                <span className="font-light italic">{experience.role}</span>
              </h3>
            </div>

            {/** RIGHT SIDE - date range */}
            <div className="md:col-span-4 text-sm font-medium text-text-main/80 uppercase tracking-wider">
              {experience.date}
            </div>

            {/** BOTTOM - description and tags */}
            <div className="md:col-span-12 space-y-4">
              <p className="md:col-span-3 mt-3 leading-relaxed text-text-main/90">{experience.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-accent/50 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
