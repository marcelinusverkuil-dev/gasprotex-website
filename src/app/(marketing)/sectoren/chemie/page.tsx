import { sectorenData } from '@/lib/sectoren-data'
import SectorPage from '@/components/marketing/SectorPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Petrochemie & Chemie — GasProtex',
  description: sectorenData.chemie.metaDescription,
}

export default function ChemiePage() {
  return <SectorPage data={sectorenData.chemie} />
}
