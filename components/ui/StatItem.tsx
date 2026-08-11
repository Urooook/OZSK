import { CalendarDays, Users, ShieldCheck } from 'lucide-react';

const ICONS = {
  calendar: CalendarDays,
  users: Users,
  shield: ShieldCheck,
};

interface StatItemProps {
  value: string;
  label: string;
  icon: keyof typeof ICONS;
}

export default function StatItem({ value, label, icon }: StatItemProps) {
  const Icon = ICONS[icon];
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">
        <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        {value && <p className="text-3xl font-bold text-white">{value}</p>}
        <p className="text-sm text-white/80 mt-1 leading-snug">{label}</p>
      </div>
    </div>
  );
}
