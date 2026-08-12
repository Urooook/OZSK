import Image from 'next/image';
/** Icon 4 — General contract: uses provided jpg image */
function CraneIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/genpodr.jpg"
        alt="Генеральный подряд"
        width={80}
        height={80}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

/** Icon 5 — Industrial buildings */
function SkyscrapersIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/Build.jpg"
        alt="Строительство промышленных объектов"
        width={80}
        height={80}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

/** Icon 6 — Civic buildings */
function PavilionIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/BuildSecond.jpg"
        alt="Строительство гражданских объектов"
        width={80}
        height={80}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

const ICONS = {
  crane: CraneIcon,
  building2: SkyscrapersIcon,
  landmark: PavilionIcon,
};

interface DirectionCardProps {
  title: string;
  icon: keyof typeof ICONS;
}

export default function DirectionCard({ title, icon }: DirectionCardProps) {
  const Icon = ICONS[icon];
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5 p-8 rounded-lg border border-brand/25 hover:border-brand/50 hover:shadow-md transition-all bg-transparent h-full">
      <Icon className="w-24 h-24 flex-shrink-0" aria-hidden="true" />
      <p className="text-sm font-semibold text-ink leading-snug">{title}</p>
    </div>
  );
}
