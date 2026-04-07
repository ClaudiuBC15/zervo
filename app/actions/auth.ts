'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function registerSalonOwner(formData: FormData) {
  // În versiunile noi de Next.js, cookies() trebuie așteptat (await)
  const cookieStore = await cookies()
  
  // Conectarea la baza de date de pe server (Sintaxa NOUĂ Supabase)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch (error) {
            // Această eroare e normală în Next.js și trebuie ignorată (apare doar dacă 
            // încerci să setezi cookies dintr-un loc care nu permite asta, 
            // dar în Server Actions funcționează perfect).
          }
        },
      },
    }
  )

  // Scoatem datele din formular
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const salonName = formData.get('salonName') as string

  // 1. Creăm contul securizat în Supabase
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (authError) throw new Error(authError.message)

  // 2. Salvăm datele salonului în baza de date
  if (authData.user) {
    const { error: dbError } = await supabase.from('salons').insert({
      owner_id: authData.user.id,
      name: salonName,
      slug: salonName.toLowerCase().replace(/ /g, '-'), // ex: "Glow Studio" devine "glow-studio"
    })
    
    if (dbError) throw new Error(dbError.message)
  }

  // 3. Totul e gata, îl trimitem direct în Dashboard
  redirect('/dashboard')
}