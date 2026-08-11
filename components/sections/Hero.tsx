import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { company, contacts } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">

      {/* ── Background: hotel photo fills the entire section ── */}
      <Image
        src="/images/h2o.png"
        alt="Гостиничный комплекс H2O"
        fill
        className="object-cover object-center"
        priority
      />

      {/* ── Mobile overlay: solid dark over full section for readability ── */}
      <div className="absolute inset-0 bg-navy-dark/85 lg:hidden" />

      {/* ── Desktop overlay: fades from opaque navy (left) to transparent (~60%) ── */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgba(7,27,48,0.98) 0%, rgba(7,27,48,0.96) 32%, rgba(10,37,64,0.78) 48%, rgba(10,37,64,0.18) 62%, transparent 74%)',
        }}
      />

      {/* ── All content above the overlays ── */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* ── Top navigation row ──
             Logo is absolute (top-left), so the wrapper needs a min-height
             equal to the logo height to prevent overlap with hero content. ── */}
        <div className="relative min-h-28 sm:min-h-36">

          {/* Logo: absolute, pinned to top-left corner of the section */}
          <Link href="/" aria-label="Перейти на главную" className="absolute left-0 top-0">
            <div
              className="bg-white pl-3 sm:pl-4 lg:pl-20 pr-7 sm:pr-10 lg:pr-12 pt-0 pb-1 sm:pb-2 overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0 100%)' }}
            >
              <Image
                src="/images/Logo.jpg"
                alt="ОЗСК-Строй"
                width={420}
                height={168}
                className="h-28 sm:h-36 w-auto object-contain scale-[1.5] origin-right"
                priority
              />
            </div>
          </Link>

          {/* Phone + CTA: right-aligned */}
          <Container>
            <div className="flex justify-end pt-4 sm:pt-5">
              <div className="flex flex-col items-end gap-2">
                {/* Phone — hidden on mobile */}
                <a
                  href={`tel:${contacts.phoneTel}`}
                  className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/70" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-wide">{contacts.phone}</span>
                </a>
                {/* Semi-transparent CTA → phone call */}
                <a
                  href={`tel:${contacts.phoneTel}`}
                  className="inline-flex items-center justify-center rounded px-5 py-2.5 text-sm font-semibold
                             bg-accent/45 border border-accent/70 text-white
                             backdrop-blur-sm hover:bg-accent/65 transition-colors cursor-pointer"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* ── Main hero content — near left edge, max ~48% width on desktop ── */}
        <div className="flex-1 flex items-center py-14 lg:py-20 relative">
          {/* No Container — use minimal direct padding to stay near the left edge */}
          <div className="w-full pl-4 sm:pl-8 lg:pl-10 pr-4">
            <div className="w-full lg:max-w-[48%] flex flex-col gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight tracking-tight">
                {company.heroTitle}
              </h1>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-sm lg:max-w-none">
                {company.heroDescription}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {/* Solid green — matches mockup */}
                <Button href="#contacts" variant="primary">
                  Обсудить проект
                </Button>
                {/* Dark-backed outline — matches mockup (dark navy fill + white border) */}
                <Button href="#contacts" variant="outline" className="bg-navy/50">
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>

          {/* Caption — bottom right, over the visible photo area */}
          <p className="absolute bottom-4 right-4 sm:right-8 text-xs text-white/55 italic">
            {company.heroImageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
