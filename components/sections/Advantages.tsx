import Container from '@/components/ui/Container';
import FeatureItem from '@/components/ui/FeatureItem';
import SectionHeading from '@/components/ui/SectionHeading';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { advantages } from '@/lib/content';

type FeatureIcon = 'award' | 'clipboard-list' | 'calendar-check' | 'shield-check' | 'users' | 'wallet';

export default function Advantages() {
  return (
    <section className="bg-white py-12 sm:py-16 w-[86%] mx-auto">
      {/* <Container> */}
        <SectionHeading label="Наши преимущества" />
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-brand/20">
          {advantages.map((adv, i) => (
            <RevealOnScroll key={adv.id} direction="bottom" delay={i * 100} className="flex-1">
              <FeatureItem
                title={adv.title}
                description={adv.description}
                icon={adv.icon as FeatureIcon}
              />
            </RevealOnScroll>
          ))}
        </div>
      {/* </Container> */}
    </section>
  );
}
