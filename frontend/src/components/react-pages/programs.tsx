function ProgramsPage() {
  const programs = [
    {
      id: "student",
      name: "Student Program",
      description: "留学サポート",
      longDescription:
        "Program dukungan studi di Jepang dengan bimbingan lengkap dari proses aplikasi hingga kelulusan.",
      image:
        "https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85",
      features: [
        "Bahasa Jepang intensif",
        "Konsultasi universitas",
        "Dukungan visa",
        "Orientasi budaya",
      ],
    },
    {
      id: "internship",
      name: "Internship Program",
      description: "インターンシップ",
      longDescription:
        "Program magang yang memberikan pengalaman kerja langsung di perusahaan-perusahaan Jepang.",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85",
      features: [
        "Penempatan magang",
        "Pelatihan pra-keberangkatan",
        "Mentoring",
        "Sertifikat kompetensi",
      ],
    },
    {
      id: "professional",
      name: "Professional Program",
      description: "技術・人文知識・国際業務",
      longDescription:
        "Program untuk profesional dengan keahlian khusus dalam bidang teknologi, humaniora, dan bisnis internasional.",
      image:
        "https://images.unsplash.com/photo-1581093059756-acf6718c0ab1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcmluZyUyMHdvcmtlcnN8ZW58MHx8fGJsdWV8MTc1MzAyNzk4MXww&ixlib=rb-4.1.0&q=85",
      features: [
        "Assesment keahlian",
        "Job matching",
        "Visa profesional",
        "Career coaching",
      ],
    },
    {
      id: "kerja-magang",
      name: "Kerja Magang",
      description: "技能実習生",
      longDescription:
        "Program pekerja magang dengan pelatihan intensif dan penempatan di berbagai sektor industri.",
      image:
        "https://images.unsplash.com/photo-1659354220856-481085fa9585?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwd29ya2Vyc3xlbnwwfHx8Ymx1ZXwxNzUzMDI3OTk1fDA&ixlib=rb-4.1.0&q=85",
      features: [
        "Pelatihan teknis",
        "Bahasa Jepang dasar",
        "Orientasi kerja",
        "Monitoring berkala",
      ],
    },
    {
      id: "ssw",
      name: "SSW/Specified Skilled Worker",
      description: "特定技能",
      longDescription:
        "Program pekerja terampil spesifik untuk memenuhi kebutuhan tenaga kerja di sektor-sektor prioritas Jepang.",
      image:
        "https://images.unsplash.com/photo-1614127938540-a1139bee1841?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHxibHVlfDE3NTMwMjc5ODh8MA&ixlib=rb-4.1.0&q=85",
      features: [
        "Tes keahlian SSW",
        "Bahasa level A2",
        "Penempatan langsung",
        "Path to permanent residency",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Program Kami</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Temukan program yang sesuai dengan minat dan keahlian Anda untuk
            berkarir di Jepang
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {program.description}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {program.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Fitur Program:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`/programs/${program.id}`}
                    className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Detail Program →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan program yang tepat untuk Anda dengan tim ahli kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Daftar Sekarang
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramsPage;
