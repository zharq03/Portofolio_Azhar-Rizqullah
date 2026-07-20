import { useState } from 'react';
import WebsiteProjects from '../components/projects/WebsiteProjects';
import UiUxProjects from '../components/projects/UiUxProjects';
import SosmedProjects from '../components/projects/SosmedProjects';
import MobileAppProjects from '../components/projects/MobileAppProjects';
import { useLanguage } from '../context/LanguageContext';

export default function ProyekPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('website');

  const tabs = [
    { id: 'website', label: 'Website Projects' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'sosmed', label: language === 'id' ? 'Desain Sosmed' : 'Social Media Design' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
        {language === 'id' ? 'Proyek Saya' : 'My Projects'}
      </h1>
      <p className="text-center mb-12 md:mb-16 text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
        {language === 'id'
          ? 'Berbagai proyek yang telah saya kerjakan dari berbagai bidang'
          : 'A collection of projects I have worked on across different domains'}
      </p>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12 overflow-x-auto">
        <div className="inline-flex bg-zinc-900/80 backdrop-blur-sm rounded-full p-1.5 border border-zinc-800 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 md:px-9 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-zinc-800/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Render berdasarkan tab */}
      {activeTab === 'website' && <WebsiteProjects />}
      {activeTab === 'uiux' && <UiUxProjects />}
      {activeTab === 'mobile' && <MobileAppProjects />}
      {activeTab === 'sosmed' && <SosmedProjects />}
    </div>
  );
}