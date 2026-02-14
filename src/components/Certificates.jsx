export default function Certificates() {
  const certs = [
    { 
      name: 'Devvest Coder Competition', 
      description: 'Apresiasi • Nov 2024',           // ganti jadi deskripsi panjang kalau mau
      image: '/assets/images/devvest.png',
      pdf: '/assets/certificates/devvest.pdf'        // ← ganti path sesuai file PDF-mu
    },
    { 
      name: 'Cisco Networking Academy', 
      description: 'Jan 2024',
      image: '/assets/images/cisco.png',
      pdf: '/assets/certificates/cisco.pdf'
    },
    { 
      name: 'MSIB Certificate', 
      description: 'Batch 7',
      image: '/assets/images/msib.png',
      pdf: '/assets/certificates/msib.pdf'
    },
    // Tambahkan sertifikat lain di sini
  ];

  return (
    <section className="space-y-16">
      <h2 className="text-3xl font-bold text-center mb-12">Sertifikat</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, i) => (
          <div key={i} className="card p-6 flex flex-col lg:flex-row gap-6">
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full lg:w-48 h-64 object-contain rounded-lg flex-shrink-0"
              />
            )}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semiboldmb-3">{cert.name}</h3>
                <p className=" mb-6">{cert.description}</p>
              </div>

              {cert.pdf && (
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red  font-semibold rounded-lg hover:bg-red-700 transition self-start"
                >
                  Lihat PDF
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}