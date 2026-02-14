export default function Hero() {
  return (
    <section className="">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-1 items-center">
          
          {/* Kiri - Foto & Badge */}
          <div className="text-center md:text-left">
            <div className="relative inline-block">
              <img
                src="/assets/images/Azhar.png"
                alt="Azhar Rizqullah"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-accent-red mx-auto md:mx-0 shadow-2xl"
              />
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold ">Azhar Rizqullah</h1>
            <p className="mt-2 text-xl ">Web Developer & UI/UX Enthusiast</p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-2  rounded-full text-sm border border-accent-red/50">Internship Scholars Today</span>
              <span className="px-4 py-2  rounded-full text-sm border border-accent-red/50">MSIB Batch 7</span>
              <span className="px-4 py-2  rounded-full text-sm border border-accent-red/50">Magang Infinite Learning</span>
            </div>
          </div>

          {/* Kanan - Profil Card */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 ">Profil Profesional</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-accent-red text-xl">👤</span>
                <div>
                  <p className="text-sm ">Nama Lengkap</p>
                  <p>Azhar Rizqullah</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent-red text-xl">♂️</span>
                <div>
                  <p className="text-sm ">Jenis Kelamin</p>
                  <p>Laki-laki</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent-red text-xl">🏠</span>
                <div>
                  <p className="text-sm 0">Domisili</p>
                  <p>Yogyakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent-red text-xl">📧</span>
                <div>
                  <p className="text-sm">Email</p>
                  <p>azhar.rizqullah@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 ">Tentang Saya</h3>
              <p className=" leading-relaxed">
                Halo! Saya mahasiswa Informatika semester akhir di Universitas AMIKOM Yogyakarta dengan minat besar di pengembangan web, desain UI/UX, dan pemasaran digital. Saya percaya teknologi harus mudah diakses semua orang. Melalui internship, MSIB, dan proyek pribadi, saya terus belajar menjembatani teori dan kebutuhan industri nyata.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}