import { useLanguage } from '../context/LanguageContext';

export default function TabSwitcher({ activeTab, setActiveTab }) {
  const { language } = useLanguage();

  const tabs = [
    { id: 'profil', label: language === 'id' ? 'Profil' : 'Profile' },
    { id: 'riwayat', label: language === 'id' ? 'Riwayat' : 'History' },
    { id: 'sertifikat', label: language === 'id' ? 'Sertifikat' : 'Certificates' },
  ]

  return (
    <div className="flex justify-center border-b border-gray-800">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-10 py-5 font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? 'text-accent-red border-b-4 border-accent-red'
              : ' hover:border-b-2 hover:border-gray-500'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}