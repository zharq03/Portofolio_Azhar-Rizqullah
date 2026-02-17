export default function Hero() {
  return (
    <section className="">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-1 items-center">
          
          {/* Kiri - Foto & Badge */}
          <div className="text-center md:text-left">
            <div className="relative inline-block">
              <img
                src="/assets/images/azharr.png"
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

           {/* Kanan: Kartu Profil Profesional */}
          <div className="card p-8 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 ">
              Profil Profesional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Nama Lengkap - Ikon user SVG */}
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-accent-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div>
                  <p className="text-sm ">NAMA LENGKAP</p>
                  <p className="text-base font-medium ">Azhar Rizqullah</p>
                </div>
              </div>

              {/* Jenis Kelamin - Ikon gender SVG */}
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-accent-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
                </svg>
                <div>
                  <p className="text-sm ">JENIS KELAMIN</p>
                  <p className="text-base font-medium ">Laki-laki</p>
                </div>
              </div>

              {/* Domisili - Ikon lokasi SVG */}
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-accent-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-sm ">DOMISILI</p>
                  <p className="text-base font-medium ">Yogyakarta, Indonesia</p>
                </div>
              </div>

              {/* Email - Ikon envelope SVG */}
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-accent-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <p className="text-sm ">EMAIL</p>
                  <a
                    href="mailto:azhar.rizqullah@gmail.com"
                    className="text-base font-medium text-accent-red hover:underline break-all"
                  >
                    azhar.rizqullah@gmail.com
                  </a>
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