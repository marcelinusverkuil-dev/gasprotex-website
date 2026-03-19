import { sectorenData } from '@/lib/sectoren-data'
import SectorPage from '@/components/marketing/SectorPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Food & Beverage — GasProtex',
  description: sectorenData.food.metaDescription,
}

export default function FoodPage() {
  return <SectorPage data={sectorenData.food} />
}
