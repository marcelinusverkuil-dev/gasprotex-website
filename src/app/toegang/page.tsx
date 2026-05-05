import Image from 'next/image'
import { checkPassword } from '@/app/actions/checkPassword'

export default function ToegangsPage({
  searchParams,
}: {
  searchParams: Promise<{ fout?: string }>
}) {
  return (
    <main
      style={{ background: '#0F2D4B', minHeight: '100vh' }}
      className="flex flex-col items-center justify-center px-4"
    >
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-10">
          <Image
            src="/images/gasprotex-logo.png"
            alt="GasProtex"
            width={180}
            height={48}
            priority
          />
        </div>

        <div
          style={{
            background: '#162F48',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Aptos, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            Beperkte toegang
          </h1>
          <p
            style={{
              fontFamily: 'Aptos, system-ui, sans-serif',
              fontSize: '14px',
              color: '#7AADCC',
              marginBottom: '28px',
            }}
          >
            Deze website is tijdelijk beveiligd. Voer het toegangswachtwoord in.
          </p>

          <form action={checkPassword}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: '#C2DCE8',
                marginBottom: '8px',
                fontFamily: 'Aptos, system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Wachtwoord
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              style={{
                width: '100%',
                background: '#0F2D4B',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '15px',
                padding: '10px 14px',
                outline: 'none',
                fontFamily: 'Aptos, system-ui, sans-serif',
                marginBottom: '8px',
              }}
              placeholder="••••••••"
            />

            <FoutMelding searchParams={searchParams} />

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#D97737',
                color: '#ffffff',
                fontFamily: 'Aptos, system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                padding: '11px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '16px',
                letterSpacing: '0.02em',
              }}
            >
              Toegang
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

async function FoutMelding({
  searchParams,
}: {
  searchParams: Promise<{ fout?: string }>
}) {
  const params = await searchParams
  if (!params.fout) return null
  return (
    <p
      style={{
        fontSize: '13px',
        color: '#F07830',
        fontFamily: 'Aptos, system-ui, sans-serif',
        marginTop: '4px',
      }}
    >
      Ongeldig wachtwoord. Probeer opnieuw.
    </p>
  )
}
