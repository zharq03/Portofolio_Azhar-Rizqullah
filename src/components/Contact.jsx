import React from 'react';

const Contact = () => (
  <section id="contact" className="py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Hubungi Kami</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Telegram</h4>
          <p><a href="https://t.me/AzhraRizqullah" className="text-blue-500 hover:underline">Azhra Rizqullah</a></p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Email</h4>
          <p><a href="mailto:azhar.rizqullah@gmail.com" className="text-blue-500 hover:underline">azhar.rizqullah@gmail.com</a></p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
          <p><a href="https://www.linkedin.com/in/azhar-rizqullah-535447309/" className="text-blue-500 hover:underline">Azhar Rizqullah</a></p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">GitHub</h4>
          <p><a href="https://github.com/zharq03" className="text-blue-500 hover:underline">zharq03</a></p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Instagram</h4>
          <p><a href="https://www.instagram.com/_azhar_riz/" className="text-blue-500 hover:underline">_azhar_riz</a></p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;