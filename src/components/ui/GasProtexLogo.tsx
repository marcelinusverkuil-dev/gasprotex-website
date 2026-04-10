interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
const sizes = { sm: { width: 160 }, md: { width: 220 }, lg: { width: 280 } }
export default function GasProtexLogo({ variant = 'light', size = 'md', className = '' }: LogoProps) {
  const { width } = sizes[size]
  return (
    <img src="/images/gasprotex_logo_transparent.svg" alt="GasProtex" width={width} height={Math.round(width * (370 / 820))} className={className} style={{ filter: variant === 'dark' ? 'brightness(0) invert(1)' : 'none' }} />
  )
}
