import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { contacts } from '@/lib/content';
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo.jpg"
              alt="ОЗСК-Строй"
              width={140}
              height={56}
              className="h-10 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Phone — hidden on mobile */}
            <a
              href={`tel:${contacts.phoneTel}`}
              className="hidden sm:flex items-center gap-2 text-ink hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-sm font-medium">{contacts.phone}</span>
            </a>
            <Button href="#contacts" variant="primary" className="text-xs sm:text-sm px-4 sm:px-6">
              Связаться с нами
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
