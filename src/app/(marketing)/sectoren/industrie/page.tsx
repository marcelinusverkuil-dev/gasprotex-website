import { sectorenData } from '@/lib/sectoren-data'
import SectorPage from '@/components/marketing/SectorPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Industrie — GasProtex',
  description: sectorenData.industrie.metaDescription,
}

export default function IndustriePage() {
  return <SectorPage data={sectorenData.industrie} />
}
