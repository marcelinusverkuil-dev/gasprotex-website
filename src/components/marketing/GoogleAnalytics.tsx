'use client'

import { useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieBanner from './CookieBanner'

export default function AnalyticsWithConsent() {
  const [accepted, setAccepted] = useState(false)

  return (
    <>
      <CookieBanner onAccept={() => setAccepted(true)} />
      {accepted && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />}
    </>
  )
}
