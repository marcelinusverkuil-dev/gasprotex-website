interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { width: 120, fontSize: 18, gap: 1 },
  md: { width: 160, fontSize: 24, gap: 2 },
  lg: { width: 200, fontSize: 30, gap: 2 },
}

export default function GasProtexLogo({
  variant = 'light',
  size = 'md',
  className = '',
}: LogoProps) {
  const { fontSize } = sizes[size]
  const gasColor = variant === 'light' ? '#1E87B4' : '#1E87B4'
  const protexColor = variant === 'light' ? '#ffffff' : '#0F2D4B'
  const arrowColor = '#D97737'

  return (
    <span
      className={`inline-flex items-center gap-1 font-display font-black tracking-widest uppercase select-none ${className}`}
      style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize, letterSpacing: '3px' }}
      aria-label="GasProtex"
    >
      <span style={{ color: gasColor }}>GAS</span>
      <svg
        width={fontSize * 0.55}
        height={fontSize * 0.7}
        viewBox="0 0 16 20"
        fill="none"
        aria-hidden="true"
        style={{ marginTop: 1 }}
      >
        <path d="M0 0 L16 10 L0 20 Z" fill={arrowColor} />
      </svg>
      <span style={{ color: protexColor }}>PROTEX</span>
    </span>
  )
}
