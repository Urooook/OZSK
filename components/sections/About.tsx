import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { company } from '@/lib/content';

export default function About() {
  return (
    <section className="bg-card py-16">
      <Container>
        <RevealOnScroll direction="left" className="max-w-xl">
          <SectionHeading label="О компании" />
          <p className="text-sm sm:text-base text-brand leading-relaxed mb-4">
            {company.description1}
          </p>
          <p className="text-sm sm:text-base text-brand leading-relaxed">
            {company.description2}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
