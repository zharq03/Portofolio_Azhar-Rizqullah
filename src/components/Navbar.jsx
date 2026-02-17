import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Keahlian', path: '/keahlian' },
  { label: 'Proyek Saya', path: '/proyek' },
  { label: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // ambil dari localStorage atau preferensi sistem
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // apply theme ke html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Nama */}
          <NavLink 
            to="/" 
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src="/assets/images/last.png"
                alt="Azhar Rizqullah"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-red-500/70 dark:ring-red-600/70 transition-all group-hover:ring-red-600"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-black" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-red-600 transition-colors">
                Azhar Rizqullah
              </div>
            </div>
          </NavLink>

          {/* Desktop Menu + Theme Toggle */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm uppercase tracking-wider font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors duration-300 ${
                      isActive 
                        ? 'text-red-600 dark:text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 dark:after:bg-red-500' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-indigo-600" />
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme toggle di mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-5 py-6 space-y-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}