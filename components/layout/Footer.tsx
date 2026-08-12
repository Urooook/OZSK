import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { contacts, company } from '@/lib/content';
export default function Footer() {
  return (
    <footer id="contacts" className="bg-navy">
      {/* Main footer content */}
      <Container>
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">

          {/* Column 1: Logo + company name */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative w-36 h-24">
              <Image
                src="/images/Logo.jpg"
                alt="ОЗСК-Строй"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-white leading-snug">
              {company.name}
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              {company.tagline}
            </p>
          </div>

          {/* Column 2: Contacts */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Контакты</p>
            <a
              href={`tel:${contacts.phoneTel}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors py-1"
            >
              <Phone className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.5} />
              {contacts.phone}
            </a>
            <a
              href={`mailto:${contacts.email}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors py-1"
            >
              <Mail className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.5} />
              {contacts.email}
            </a>
            <div className="flex items-start gap-2 py-1">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-white/80 leading-relaxed">{contacts.address}</p>
            </div>
          </div>

          {/* Column 3: CTA */}
          <div className="flex flex-col items-start sm:items-end justify-start">
            <Button href={`mailto:${contacts.email}`} variant="primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      </Container>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-4">
            <p className="text-xs text-white/40">{contacts.copyright}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
