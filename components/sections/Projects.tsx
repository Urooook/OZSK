import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section className="bg-card py-10 w-[86%] mx-auto">
      <div className="flex items-center mb-6">
        <SectionHeading label="Проекты" className="mb-0" />
      </div>
      <RevealOnScroll direction="bottom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              image={project.image}
            />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
