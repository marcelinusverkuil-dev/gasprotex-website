'use client';

import { Shield, Clock, Calendar } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    value: 'Elke 17 min',
    label: 'Productieverlies voorkomen',
    variant: 'steel' as const,
  },
  {
    icon: Clock,
    value: '+30%',
    label: 'Beschikbaarheid installaties',
    variant: 'orange' as const,
  },
  {
    icon: Calendar,
    value: '+50%',
    label: 'Snellere onderhoudsplanning',
    variant: 'steel' as const,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-steel">

      {/* Achtergrond — vervang dit door een <Image> component als je de foto hebt */}
      

      {/* Placeholder label — verwijder dit als je een echte foto gebruikt */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs tracking-widest uppercase text-fog/20">
          [ Industriële foto — volgt later ]
        </span>
      </div>

      {/* Donkere overlay van links naar rechts */}
      <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(10,28,48,0.98) 0%, rgba(10,28,48,0.92) 60%, rgba(10,28,48,0.55) 100%)"}} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-12 py-24">

        {/* Linker kolom — headline + knoppen */}
        <div className="max-w-xl animate-fade-up">
          <p className="text-xs tracking-widest uppercase text-orange font-medium mb-4">
            Akoestische gaslekdetectie
          </p>

          <h1 className="font-display text-5xl font-bold text-off-white leading-tight mb-6">
            Detecteer elk gaslek.{' '}
            <span className="text-blue">Voordat het gevaarlijk</span>{' '}
            wordt.
          </h1>

          <p className="text-fog text-lg leading-relaxed mb-10 max-w-md">
            Real-time bewaking van gasleidingen en industriële installaties —
            zonder productieonderbreking.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange text-white px-8 py-3.5 text-sm font-semibold hover:bg-orange-hot transition-colors">
              Vraag een demo aan
            </button>
            <button className="border border-fog/30 text-mist px-8 py-3.5 text-sm font-medium hover:border-fog/60 hover:text-off-white transition-colors">
              Meer informatie
            </button>
          </div>
        </div>

        {/* Rechter kolom — drijvende badges */}
        <div className="hidden lg:flex flex-col gap-4 animate-fade-up-2">
          {badges.map((badge) => (
            <StatBadge key={badge.value} {...badge} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stat Badge ── */
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
      className={`flex items-center gap-4 px-5 py-4 rounded-lg min-w-[220px] backdrop-blur-sm border ${
        isOrange
          ? 'bg-orange/90 border-orange-hot/30'
          : 'bg-steel/90 border-fog/20'
      }`}
    >
      {/* Icoon cirkel */}
      <div
        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          isOrange ? 'border-white/60' : 'border-fog/60'
        }`}
      >
        <Icon
          size={16}
          className={isOrange ? 'text-white' : 'text-fog'}
          strokeWidth={1.8}
        />
      </div>

      {/* Tekst */}
      <div>
        <p
          className={`text-lg font-bold leading-tight ${
            isOrange ? 'text-white' : 'text-off-white'
          }`}
        >
          {value}
        </p>
        <p
          className={`text-xs leading-snug ${
            isOrange ? 'text-white/75' : 'text-fog'
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
