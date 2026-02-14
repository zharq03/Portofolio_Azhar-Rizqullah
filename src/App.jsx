import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Keahlian from './pages/Keahlian'
import Proyek from './pages/proyek'
import Kontak from './pages/kontak'

export default function App() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-24 pb-20">  {/* padding atas biar ga ketutup navbar fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keahlian" element={<Keahlian />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* Optional: 404 page */}
          <Route path="*" element={<div className="text-center py-20 text-4xl">404 - Halaman Tidak Ditemukan</div>} />
        </Routes>
      </main>
    </div>
  )
}