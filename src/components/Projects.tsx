import { moreProjects, projects } from '../data/site'
import { ProjectCard } from './ProjectCard'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Products I've designed, built and shipped"
      description="Two real products, each with its own backend, roles and edge cases — plus everything smaller that came before them."
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={Boolean(project.flagship)}
            index={index}
          />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <div className="mt-20">
          <Reveal>
            <h3 className="text-xl font-semibold sm:text-2xl">More Projects</h3>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Smaller builds and experiments. This list grows straight from the data file.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {moreProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
