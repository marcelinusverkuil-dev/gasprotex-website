import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-navy flex flex-col"
      style={{ paddingTop: '100px', paddingBottom: '40px' }}
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Industriële installatie met persluchtleidingen"
        fill
        className="object-cover object-center"
        style={{ filter: 'brightness(0.9)' }}
        priority
        quality={90}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,28,48,0.92) 0%, rgba(10,28,48,0.65) 50%, rgba(10,28,48,0.10) 100%)',
        }}
      />

      <div className="relative z-10 flex-1 w-full container-main flex flex-col justify-center gap-2">

        <h1
          className="animate-fade-up font-bold text-off-white"
          style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          Gas- en persluchtlekken.
        </h1>

        <p className="animate-fade-up-1 text-[#C2DCE8] text-lg">
          Specialist in gaslekdetectie en persluchtlekdetectie.<br />
          Voor industrie en voedingsmiddelensector.
        </p>

      </div>
    </section>
  );
}
