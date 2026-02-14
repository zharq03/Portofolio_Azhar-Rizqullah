export default function Contact() {
  return (
    <section id="kontak" className="card text-center">
      <h2 className="text-3xl font-bold mb-10">Hubungi Saya</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div>
          <div className="text-5xl mb-4 text-accent-red">📧</div>
          <p className="text-lg">azhar.rizqullah@gmail.com</p>
        </div>
        <div>
          <div className="text-5xl mb-4 text-accent-red">📱</div>
          <p className="text-lg">
            <a href="https://t.me/AzhraRizqullah" target="_blank" rel="noopener noreferrer" className="hover:text-accent-red">
              Telegram: @AzhraRizqullah
            </a>
          </p>
        </div>
        <div>
          <div className="text-5xl mb-4 text-accent-red">🔗</div>
          <p className="text-lg">
            <a href="https://www.linkedin.com/in/azhar-rizqullah-535447309/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-red">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}