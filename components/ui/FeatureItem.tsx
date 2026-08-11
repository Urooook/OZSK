import { Award, ClipboardList, CalendarCheck, ShieldCheck, Users, Wallet } from 'lucide-react';

const ICONS = {
  award: Award,
  'clipboard-list': ClipboardList,
  'calendar-check': CalendarCheck,
  'shield-check': ShieldCheck,
  users: Users,
  wallet: Wallet,
};

interface FeatureItemProps {
  title: string;
  description: string;
  icon: keyof typeof ICONS;
}

export default function FeatureItem({ title, description, icon }: FeatureItemProps) {
  const Icon = ICONS[icon];
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4 py-6 flex-1 first:pl-0 last:pr-0">
      <Icon className="w-8 h-8 text-accent flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
      <p className="text-sm font-bold text-ink">{title}</p>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </div>
  );
}
