// ============================================================
// GasProtex - Centrale TypeScript types
// ============================================================

export type SubscriptionTier = 'basis' | 'premium' | 'executive'

export type LeakStatus = 'open' | 'gedicht' | 'in_behandeling'

export type GasType = 'perslucht' | 'stikstof' | 'co2' | 'methaan' | 'waterstof' | 'stoom' | 'overig'

export interface Client {
  id: string
  bedrijfsnaam: string
  kvk_nummer?: string
  adres?: string
  stad?: string
  postcode?: string
  sector: string
  abonnement: SubscriptionTier
  stripe_customer_id?: string
  created_at: string
}

export interface Contact {
  id: string
  client_id: string
  naam: string
  email: string
  telefoon?: string
  functie?: string
  rol: 'admin' | 'viewer'
}

export interface Inspection {
  id: string
  client_id: string
  datum: string
  locatie: string
  inspecteur: string
  status: 'gepland' | 'uitgevoerd' | 'gerapporteerd'
  opmerkingen?: string
  created_at: string
}

export interface Leak {
  id: string
  inspection_id: string
  client_id: string
  locatie_omschrijving: string
  gas_type: GasType
  druk_bar?: number
  lekgrootte_lh?: number       // liter per uur
  kosten_per_jaar?: number     // euro
  co2_kg_per_jaar?: number
  status: LeakStatus
  foto_url?: string
  qr_asset_id?: string
  x_coordinaat?: number        // voor plattegrond
  y_coordinaat?: number
  prioriteit: 'laag' | 'medium' | 'hoog' | 'kritiek'
  created_at: string
  gedicht_op?: string
}

export interface Asset {
  id: string
  client_id: string
  leak_id?: string
  qr_code: string
  label: string
  locatie: string
  created_at: string
}

export interface Report {
  id: string
  inspection_id: string
  client_id: string
  type: 'pdf' | 'interactief'
  bestand_url?: string
  created_at: string
}

export interface SavingsSummary {
  totaal_lekken: number
  open_lekken: number
  gedichte_lekken: number
  kosten_open_per_jaar: number
  kosten_bespaard_per_jaar: number
  co2_bespaard_kg: number
}
