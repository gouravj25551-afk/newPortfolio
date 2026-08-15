import { projects } from '../data/site'
import { ProjectCard } from './ProjectCard'
import { Section } from './ui/Section'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Currently Building"
      title="What I'm building"
      description="One project has my attention right now. I'd rather build a single product properly than collect half-finished ones."
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured index={index} />
        ))}
      </div>
    </Section>
  )
}
