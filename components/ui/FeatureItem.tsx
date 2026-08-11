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
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-muted mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
