import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { company } from '@/lib/content';

export default function About() {
  return (
    <section className="bg-card py-16">
      <Container>
        <div className="max-w-xl">
          <SectionHeading label="О компании" />
          <h2 className="text-2xl sm:text-3xl font-bold text-brand uppercase mb-6 leading-tight">
            {company.aboutTitle}
          </h2>
          <p className="text-sm sm:text-base text-brand leading-relaxed mb-4">
            {company.description1}
          </p>
          <p className="text-sm sm:text-base text-brand leading-relaxed">
            {company.description2}
          </p>
        </div>
      </Container>
    </section>
  );
}
