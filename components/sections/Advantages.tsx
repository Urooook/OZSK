import Container from '@/components/ui/Container';
import FeatureItem from '@/components/ui/FeatureItem';
import SectionHeading from '@/components/ui/SectionHeading';
import { advantages } from '@/lib/content';

type FeatureIcon = 'award' | 'clipboard-list' | 'calendar-check' | 'shield-check' | 'users' | 'wallet';

export default function Advantages() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <Container>
        <SectionHeading label="Наши преимущества" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <FeatureItem
              key={adv.id}
              title={adv.title}
              description={adv.description}
              icon={adv.icon as FeatureIcon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
