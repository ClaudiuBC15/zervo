'use client'

import { registerSalonOwner } from '@/app/actions/auth'
import Link from 'next/link'
import { useState } from 'react'

export default function B2BLoginRegister() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-[24px] w-full max-w-[440px] p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold mb-2">Înregistrare Salon</h2>
          <p className="text-gray-500 text-sm">Trial gratuit 30 zile. Configurăm totul pentru tine.</p>
        </div>

        {/* Formularul comunică direct cu Server Action-ul nostru */}
        <form 
          action={async (formData) => {
            setIsLoading(true)
            try {
              await registerSalonOwner(formData)
            } catch (error) {
              alert("A apărut o eroare la creare. Verifică dacă emailul nu este deja folosit.")
              setIsLoading(false)
            }
          }} 
          className="space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Nume Salon *</label>
            <input 
              type="text" 
              name="salonName" 
              required 
              className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" 
              placeholder="ex: Glow Studio" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Adresa de Email *</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" 
              placeholder="contact@salon.ro" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Parolă *</label>
            <input 
              type="password" 
              name="password" 
              required 
              minLength={6}
              className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" 
              placeholder="Minim 6 caractere" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl mt-4 transition disabled:opacity-50"
          >
            {isLoading ? 'Se creează contul...' : 'Creează Contul de Salon'}
          </button>
        </form>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition">
            ← Înapoi la Autentificare Client
          </Link>
        </div>
      </div>
    </div>
  )
}