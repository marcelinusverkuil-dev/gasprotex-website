import { sectorenData } from '@/lib/sectoren-data'
import SectorPage from '@/components/marketing/SectorPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Energie & Utilities — GasProtex',
  description: sectorenData.energie.metaDescription,
}

export default function EnergiePage() {
  return <SectorPage data={sectorenData.energie} />
}
