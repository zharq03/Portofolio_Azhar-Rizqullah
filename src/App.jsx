// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Keahlian from './pages/keahlian'
import Proyek from './pages/proyek'
import Kontak from './pages/kontak'
import Contact from './components/Contact'
import { useLanguage } from './context/LanguageContext'

function NotFound() {
  const { language } = useLanguage();
  return (
    <div className="text-center py-20 text-4xl text-[var(--text)]">
      404 – {language === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-10"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keahlian" element={<Keahlian />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Contact />
    </div>
  )
}