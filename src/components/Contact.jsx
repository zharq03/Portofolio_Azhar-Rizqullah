import React from 'react';

const Contact = () => (
  <section id="contact" className="py-12 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hubungi Saya</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Jika Anda memiliki pertanyaan atau ingin berkolaborasi, jangan ragu untuk menghubungi!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Telegram</h4>
          <p>
            <a
              href="https://t.me/AzhraRizqullah"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azhra Rizqullah
            </a>
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h4>
          <p>
            <a
              href="mailto:azhar.rizqullah@gmail.com"
              className="text-blue-500 hover:underline"
            >
              azhar.rizqullah@gmail.com
            </a>
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/azhar-rizqullah-535447309/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azhar Rizqullah
            </a>
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">GitHub</h4>
          <p>
            <a
              href="https://github.com/zharq03"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              zharq03
            </a>
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Instagram</h4>
          <p>
            <a
              href="https://www.instagram.com/_azhar_riz/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              _azhar_riz
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;