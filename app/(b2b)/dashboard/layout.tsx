import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-10">
        {/* Logo */}
        <div className="h-[70px] flex items-center px-6 border-b border-gray-200">
          <Link href="/" className="font-serif text-2xl font-bold">
            Rezervo<span className="text-blue-600">.</span>
          </Link>
        </div>
        
        {/* Profil Salon */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-sm font-semibold">Glow Studio Center</h3>
          <p className="text-xs text-gray-500 mt-1">Manager: Elena P.</p>
        </div>

        {/* Linkuri Meniu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium transition">
            <span>📅</span> Calendar Programări
          </Link>
          <Link href="/dashboard/agenda" className="flex items-center justify-between px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition">
            <div className="flex items-center gap-3">
              <span>📝</span> Agenda
            </div>
            <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">3</span>
          </Link>
          <Link href="/dashboard/clients" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition">
            <span>👥</span> Bază Clienți
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition">
            <span>⚙️</span> Setări Salon
          </Link>
        </nav>

        {/* Buton Iesire */}
        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition">
            <span>←</span> Ieși la site
          </Link>
        </div>
      </aside>

      {/* ===== ZONA PRINCIPALĂ DE CONȚINUT ===== */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Aici va fi injectat codul din page.tsx (calendarul) */}
        {children}
      </main>
    </div>
  );
}