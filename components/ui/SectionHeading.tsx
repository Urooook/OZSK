interface SectionHeadingProps {
  label: string;
  className?: string;
  as?: 'h2' | 'h3';
}

export default function SectionHeading({ label, className = '', as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <Tag className="text-base font-bold uppercase tracking-widest text-brand">{label}</Tag>
      <span className="h-[2px] w-10 bg-accent flex-shrink-0 rounded-sm" aria-hidden="true" />
    </div>
  );
}
