export default function DashboardPage() {
  // Simulăm zilele și orele pentru design
  const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  const days = [
    { name: 'Lun', date: '19' },
    { name: 'Mar', date: '20', active: true }, // Marți e ziua curentă
    { name: 'Mie', date: '21' },
    { name: 'Joi', date: '22' },
    { name: 'Vin', date: '23' }
  ];

  return (
    <div className="flex-1 flex flex-col p-6 overflow-hidden">
      {/* Header-ul paginii */}
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-semibold">Control Programări</h2>
        </div>
      </div>

      {/* Containerul Calendarului */}
      <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">
        
        {/* Toolbar Calendar */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <h3 className="text-sm font-semibold">Săptămâna curentă (Aprilie)</h3>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
            + Adaugă programare
          </button>
        </div>

        {/* Grila Calendarului */}
        <div className="flex-1 flex overflow-y-auto relative">
          
          {/* Coloana Orelor (Y-Axis) */}
          <div className="w-16 flex-shrink-0 border-r border-gray-200 bg-gray-50/50">
            <div className="h-10 border-b border-gray-200"></div> {/* Spațiu gol sus */}
            {hours.map((hour) => (
              <div key={hour} className="h-[60px] text-center pt-2 text-[11px] text-gray-500 font-medium border-b border-gray-200">
                {hour}
              </div>
            ))}
          </div>

          {/* Coloanele Zilelor (X-Axis) */}
          <div className="flex flex-1">
            {days.map((day, idx) => (
              <div key={idx} className="flex-1 min-w-[180px] border-r border-gray-200 relative">
                
                {/* Header Zi */}
                <div className={`h-10 text-center flex items-center justify-center gap-1.5 border-b border-gray-200 sticky top-0 z-10 ${day.active ? 'bg-blue-50/50' : 'bg-white'}`}>
                  <span className={`text-[11px] uppercase font-bold ${day.active ? 'text-blue-600' : 'text-gray-500'}`}>{day.name}</span>
                  <span className={`text-sm font-bold ${day.active ? 'text-blue-600' : 'text-gray-900'}`}>{day.date}</span>
                </div>

                {/* Liniile orizontale din fundal */}
                <div className="absolute inset-0 top-10 pointer-events-none z-0">
                  {hours.map((h) => (
                    <div key={`line-${h}`} className="h-[60px] border-b border-gray-100"></div>
                  ))}
                </div>

                {/* AICI VOR FI RANDATE PROGRAMĂRILE DIN BAZA DE DATE (Exemplu static jos) */}
                {day.active && (
                  <div className="absolute left-1.5 right-1.5 top-[100px] h-[90px] bg-emerald-100 border-l-4 border-emerald-500 rounded-md p-2 z-10 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform">
                    <div className="text-[10px] font-bold text-emerald-800 mb-0.5">09:00 - 10:30 (90m)</div>
                    <div className="text-xs font-semibold text-emerald-900 leading-tight">Femei - Tuns & Vopsit</div>
                    <div className="text-[10px] text-emerald-700 mt-1">👤 Client: Elena S.</div>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}