// Conversiefactor CO₂ → autokilometers
// 7,0 km per kg CO₂ = 143 g CO₂/km (CBS Statline 2024, NL wagenpark gemiddeld)
export const KM_PER_KG_CO2 = 7.0

/**
 * Formatteert een CO₂-waarde in kg naar een leesbare string.
 * < 1.000 kg  → kg met 0 decimalen (bv. "850 kg")
 * < 10.000 kg → ton met 1 decimaal (bv. "1,2 ton")
 * ≥ 10.000 kg → ton met 0 decimalen (bv. "127 ton")
 */
export function formatCO2(kg: number): string {
  if (kg < 1000) {
    return `${Math.round(kg).toLocaleString('nl-NL')} kg`
  }
  const ton = kg / 1000
  if (ton < 10) {
    return `${ton.toLocaleString('nl-NL', { maximumFractionDigits: 1, minimumFractionDigits: 1 })} ton`
  }
  return `${Math.round(ton).toLocaleString('nl-NL')} ton`
}

export function formatAutoKm(kgCO2: number): string {
  return `${Math.round(kgCO2 * KM_PER_KG_CO2).toLocaleString('nl-NL')} km`
}
