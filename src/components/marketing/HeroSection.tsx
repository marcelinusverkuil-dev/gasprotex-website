'use client';

import Image from 'next/image';
import { CircleGauge, ShieldAlert, Euro } from 'lucide-react';

const badges = [
  {
    icon: CircleGauge,
    value: 'Lekdetectie',
    label: 'Zonder productiestilstand',
    variant: 'steel' as const,
  },
  {
    icon: ShieldAlert,
    value: '30%',
    label: 'Van perslucht gaat verloren door lekken',
    variant: 'orange' as const,
  },
  {
    icon: Euro,
    value: 'Directe',
    label: 'Kostenindicatie',
    variant: 'steel' as const,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden bg-steel">

      <Image
        src="/images/hero-bg.jpg"
        alt="Industriële installatie"
        fill

        className="object-cover object-center"
        style={{ filter: 'brightness(0.9)' }}
        priority
        quality={90}
      />

      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,28,48,0.92) 0%, rgba(10,28,48,0.65) 50%, rgba(10,28,48,0.10) 100%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between gap-12 py-16" style={{ paddingLeft: '80px', paddingRight: '80px' }}>

        <div className="max-w-xl animate-fade-up">
          <p className="text-xs tracking-widest uppercase text-orange font-medium mb-4">
            Akoestische gaslekdetectie
          </p>

          <h1 className="font-display text-5xl font-bold text-off-white leading-tight mb-6">
            Detecteer elk gaslek.<br />
            <span className="text-brand-blue">Voordat het gevaarlijk wordt.</span>
          </h1>

          <p className="text-fog text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
            Gaslekdetectie zonder productieonderbreking.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-orange text-white text-sm font-semibold hover:bg-orange-hot transition-colors rounded-md"
              style={{ minWidth: '200px', padding: '14px 32px', display: 'inline-block', textAlign: 'center' }}
            >
              Vraag een demo aan
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4 animate-fade-up-2">
          {badges.map((badge) => (
            <StatBadge key={badge.value} {...badge} />
          ))}
        </div>
      </div>
    </section>
  );
}

type BadgeVariant = 'steel' | 'orange';

interface StatBadgeProps {
  icon: React.ElementType;
  value: string;
  label: string;
  variant: BadgeVariant;
}

function StatBadge({ icon: Icon, value, label, variant }: StatBadgeProps) {
  const isOrange = variant === 'orange';

  return (
    <div
      className={`flex items-center gap-6 px-7 py-6 rounded-lg min-w-[280px] backdrop-blur-sm border ${
        isOrange
          ? 'bg-orange/90 border-orange-hot/30'
          : 'bg-steel/90 border-fog/20'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          isOrange ? 'border-white/60' : 'border-fog/60'
        }`}
      >
        <Icon
          size={22}
          className={isOrange ? 'text-white' : 'text-fog'}
          strokeWidth={1.8}
        />
      </div>

      <div>
        <p
          className={`text-2xl font-bold leading-tight ${
            isOrange ? 'text-white' : 'text-off-white'
          }`}
        >
          {value}
        </p>
        <p
          className={`text-sm leading-snug ${
            isOrange ? 'text-white/75' : 'text-fog'
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
