// src/pages/Home.jsx
import { useState } from 'react'
import Navbar from '../components/Navbar'
import TabSwitcher from '../components/TabSwitcher'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'

export default function Home() {
  const [activeTab, setActiveTab] = useState('profil')

  return (
    <div className="min-h-screen">  {/* bg/text dari index.css var(--bg) */}
      <Navbar />

      <main className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'profil' && (
            <div className="space-y-24 mt-12">
              <Hero />
              <Skills />
            </div>
          )}

          {activeTab === 'riwayat' && (
            <div className="mt-12">
              <Experience extended={true} />
            </div>
          )}

          {activeTab === 'sertifikat' && (
            <div className="mt-12">
              <Certificates />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}