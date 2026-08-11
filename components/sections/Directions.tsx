import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import DirectionCard from '@/components/ui/DirectionCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { directions } from '@/lib/content';

export default function Directions() {
  return (
    <section className="bg-card py-16">
      <Container>
        <SectionHeading label="Направления деятельности" />
        <RevealOnScroll direction="right">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 items-stretch">
          {directions.map((dir) => (
            <DirectionCard
              key={dir.id}
              title={dir.title}
              icon={dir.icon as 'crane' | 'building2' | 'landmark'}
            />
          ))}
        </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
