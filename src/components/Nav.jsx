import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      console.log('Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Light mode enabled');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 dark:text-gray-300">light</span>
        <input
          type="checkbox"
          id="dark-toggle"
          className="hidden"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="dark-toggle" className="relative inline-block w-12 h-6 bg-gray-300 rounded-full cursor-pointer">
          <div className={`absolute w-6 h-6 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </label>
        <span className="text-gray-700 dark:text-gray-300">dark</span>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          href="#hero"
          onClick={() => scrollToSection('#hero')}
          className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
        >
          Tentang Saya
        </a>
        <a
          href="#passion"
          onClick={() => scrollToSection('#passion')}
          className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
        >
          Passion
        </a>
        <a
          href="#sertifikat"
          onClick={() => scrollToSection('#sertifikat')}
          className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
        >
          Sertifikat
        </a>
        <a
          href="#projects"
          onClick={() => scrollToSection('#projects')}
          className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
        >
          Proyek
        </a>
        <a
          href="#skills"
          onClick={() => scrollToSection('#skills')}
          className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
        >
          Keterampilan
        </a>
        <a
          href="#contact"
          onClick={() => scrollToSection('#contact')}
          className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
        >
          Kontak
        </a>
        <a
          href="/CV.pdf"
          target="_blank"
          className="ml-4 px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
  <button
    onClick={toggleMenu}
    className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
    aria-label="Toggle menu"
  >
    <div
      className={`w-8 h-1 bg-gray-500 dark:bg-gray-800 mb-1.5 rounded-full transition-all duration-300 ${
        isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
      }`}
    ></div>
    <div
      className={`w-8 h-1 bg-gray-500 dark:bg-gray-800 mb-1.5 rounded-full transition-all duration-300 ${
        isMenuOpen ? 'opacity-0' : ''
      }`}
    ></div>
    <div
      className={`w-8 h-1 bg-gray-500 dark:bg-gray-800 rounded-full transition-all duration-300 ${
        isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
      }`}
    ></div>
  </button>
</div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 flex flex-col items-center space-y-3 p-6 shadow-lg rounded-b-lg md:hidden transform transition-all duration-300 ease-in-out"
          style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)', opacity: isMenuOpen ? 1 : 0 }}
        >
          <a
            href="#hero"
            onClick={() => scrollToSection('#hero')}
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium text-lg transition-colors duration-200"
          >
            Tentang Saya
          </a>
          <a
            href="#passion"
            onClick={() => scrollToSection('#passion')}
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium text-lg transition-colors duration-200"
          >
            Passion
          </a>
          <a
            href="#sertifikat"
            onClick={() => scrollToSection('#sertifikat')}
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium text-lg transition-colors duration-200"
          >
            Sertifikat Pengalaman
          </a>
          <a
            href="#projects"
            onClick={() => scrollToSection('#projects')}
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium text-lg transition-colors duration-200"
          >
            Proyek
          </a>
          <a
            href="#skills"
            onClick={() => scrollToSection('#skills')}
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium text-lg transition-colors duration-200"
          >
            Keterampilan
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection('#contact')}
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 font-medium text-lg transition-colors duration-200"
          >
            Kontak
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            className="px-5 py-2 bg-blue-500 text-white font-medium text-lg rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;