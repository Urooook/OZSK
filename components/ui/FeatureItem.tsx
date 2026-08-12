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
    <div className="flex flex-row items-start gap-3 px-6 py-6">
      <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-muted leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  );
}
