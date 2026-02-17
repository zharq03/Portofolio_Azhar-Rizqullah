export default function Experience({ extended = false }) {
  const educationHistory = [
    { year: '2010 - 2016', name: 'Sekolah Dasar Negeri 6', location: 'Sambas' },
    { year: '2016 - 2019', name: 'Sekolah Menengah Pertama Negeri 2', location: ' Sambas' },
    { year: '2019 - 2022', name: 'Madrasah Aliyah Negeri', location: ' Sejangkung' },
    { year: '2022 - Sekarang', name: 'Universitas AMIKOM Yogyakarta', location: 'Yogyakarta' },
  ]

  const workHistory = [
    { year: 'Agustus 2024 - Oktober 2024', name: 'Magang baby lahap', location: 'tangerang baby lahap' },
    { year: 'Sepetmber 2024 - 2024', name: 'Magang Web Development', location: 'Infinite Learning' },
    { year: 'Sepetmber 2024 - Januari 2024', name: 'Peserta MSIB Batch 7', location: 'PT Kinema Systrans' },
    { year: 'September 2025 - Desember 2025', name: 'Front-End Developer Internship', location: 'Scholars Today – PT Today Group' },
  ]

  return (
    <section id="pengalaman" className="space-y-16">
      {/* Riwayat Pendidikan - Timeline seperti gambar */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-accent-red mb-8 text-center">Riwayat Pendidikan</h3>
        <div className="relative flex justify-between items-center px-4 md:px-8">
          {/* Garis horizontal */}
          <div className="absolute top-1 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2"></div>

          {educationHistory.map((item, i) => (
            <div key={i} className="relative z-10 text-center flex-1">
              <div className="w-6 h-6 mx-auto rounded-full bg-gray-800 border-2 border-accent-red mb-4"></div>
              <p className="text-sm ">{item.year}</p>
              <p className="text-base font-medium ">{item.name}</p>
              <p className="text-sm ">{item.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pengalaman Mengajar/Bekerja - Timeline serupa */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-accent-red mb-8 text-center">Pengalaman Bekerja</h3>
        <div className="relative flex justify-between items-center px-4 md:px-8">
          {/* Garis horizontal */}
          <div className="absolute top-1 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2"></div>

          {workHistory.map((item, i) => (
            <div key={i} className="relative z-10 text-center flex-1">
              <div className="w-6 h-6 mx-auto rounded-full bg-gray-800 border-2 border-accent-red mb-4"></div>
              <p className="text-sm ">{item.year}</p>
              <p className="text-base font-medium ">{item.name}</p>
              <p className="text-sm ">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}