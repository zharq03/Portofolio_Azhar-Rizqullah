export default function Experience({ extended = false }) {
  const educationHistory = [
    { year: '2019 - 2022', name: 'Madrasah Aliyah Negeri Sambas', location: 'Jurusan MIPA' },
    { year: '2022 - Sekarang', name: 'Universitas AMIKOM Yogyakarta', location: 'Informatika (Semester 7)' },
  ]

  const workHistory = [
    { year: '2024 - 2025', name: 'Magang Web Development', location: 'Infinite Learning' },
    { year: 'Januari 2025', name: 'Peserta MSIB Batch 7', location: 'PT Kinema Systrans' },
    { year: 'Desember 2025', name: 'Front-End Developer Internship', location: 'Scholars Today – PT Today Group' },
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