// src/components/Contact.jsx
export default function Contact() {
  return (
    <footer className=" border-t border-gray-200 dark:border-gray-800 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Kolom 1: Nama & Intro singkat */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              AZHAR RIZQULLAH
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Mahasiswa Informatika AMIKOM Yogyakarta. Passion di web development, UI/UX, dan teknologi digital. Terbuka untuk kolaborasi proyek, freelance, atau kesempatan kerja.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--text)] mb-5">NAVIGASI</h4>
            <ul className="space-y-2 text-sm ">
              <li><a href="/" className="hover:text-accent-red transition">Beranda</a></li>
              <li><a href="/keahlian" className="hover:text-accent-red transition">Keahlian</a></li>
              <li><a href="/proyek" className="hover:text-accent-red transition">Proyek</a></li>
              <li><a href="/kontak" className="hover:text-accent-red transition">Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3: Hubungi Saya */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--text)] mb-5">HUBUNGI SAYA</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-xl text-accent-red"></span>
                <a href="mailto:azhar.rizqullah@gmail.com" className="hover:text-accent-red transition">
                  azhar.rizqullah@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl text-accent-red"></span>
                <a href="https://www.linkedin.com/in/azhar-rizqullah-535447309/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-red transition">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl text-accent-red"></span>
                Yogyakarta, Indonesia
              </li>
            </ul>
          </div>

          {/* Kolom 4: Status */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold text-[var(--text)] mb-5">STATUS</h4>
            <div className=" border border-green-700/40 rounded-lg p-5 w-full max-w-xs text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className=" font-medium text-sm">AVAILABLE FOR COLLABORATION</span>
              </div>
              <p className="text-xs  mb-4">
                Terbuka untuk proyek freelance, kolaborasi UI/UX & web dev, atau kesempatan kerja.
              </p>
              <a
                href="mailto:azhar.rizqullah@gmail.com?subject=Kolaborasi%20Proyek%20-%20Azhar%20Rizqullah"
                className="inline-block px-5 py-2.5 bg-accent-red text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
              >
                letsgo collab
              </a>
            </div>
          </div>
        </div>

        {/* Copyright bawah */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Azhar Rizqullah - ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}