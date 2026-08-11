interface SectionHeadingProps {
  label: string;
  className?: string;
  as?: 'h2' | 'h3';
}

export default function SectionHeading({ label, className = '', as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <Tag className="text-xs font-bold uppercase tracking-widest text-brand">{label}</Tag>
      <span className="h-px w-8 bg-accent flex-shrink-0" aria-hidden="true" />
    </div>
  );
}
