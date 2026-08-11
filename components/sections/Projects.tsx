import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section className="bg-card py-10 w-[86%] mx-auto">
      {/* <Container> */}
        <div className="flex items-center mb-6">
          <SectionHeading label="Проекты" className="mb-0" />
          {/* <a
            href="#"
            className="text-sm text-accent font-medium hover:underline flex items-center gap-1"
          >
            Смотреть все проекты
            <span aria-hidden>→</span>
          </a> */}
        </div>
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
      {/* </Container> */}
    </section>
  );
}
