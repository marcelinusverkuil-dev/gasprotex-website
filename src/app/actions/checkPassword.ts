'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function checkPassword(formData: FormData) {
  const submitted = formData.get('password') as string
  const correct = process.env.PREVIEW_PASSWORD

  if (correct && submitted === correct) {
    const cookieStore = await cookies()
    cookieStore.set('gp_preview', correct, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    redirect('/')
  }

  redirect('/toegang?fout=1')
}
