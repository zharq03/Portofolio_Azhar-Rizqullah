import React, { useState, useEffect } from 'react';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Selamat Datang di Portofolio Saya!</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Jelajahi karya saya dan jangan ragu untuk menghubungi!</p>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;