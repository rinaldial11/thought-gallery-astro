import { CheckCircle } from "lucide-react";

function ProgramDetails({ slug }: { slug: string }) {
  const programData = {
    student: {
      name: "Student Program",
      description: "留学サポート",
      hero: "https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85",
      overview:
        "Program Student dirancang khusus untuk mendukung pelajar Indonesia yang ingin melanjutkan studi di Jepang. Kami menyediakan bimbingan komprehensif mulai dari persiapan aplikasi universitas hingga dukungan selama masa studi.",
      features: [
        "Pelatihan bahasa Jepang intensif hingga level N4/N3",
        "Konsultasi pemilihan universitas dan jurusan",
        "Bantuan proses aplikasi visa pelajar",
        "Orientasi budaya dan kehidupan di Jepang",
        "Dukungan akomodasi dan living support",
        "Mentoring selama masa studi",
      ],
      curriculum: [
        {
          phase: "Fase 1",
          duration: "3 bulan",
          content: "Bahasa Jepang dasar (Hiragana, Katakana, Kanji dasar)",
        },
        {
          phase: "Fase 2",
          duration: "3 bulan",
          content: "Bahasa Jepang menengah (Tata bahasa N4)",
        },
        {
          phase: "Fase 3",
          duration: "2 bulan",
          content: "Persiapan ujian JLPT dan aplikasi universitas",
        },
        {
          phase: "Fase 4",
          duration: "1 bulan",
          content: "Orientasi pra-keberangkatan dan budaya Jepang",
        },
      ],
      requirements: [
        "Lulusan SMA/SMK sederajat",
        "Usia maksimal 25 tahun",
        "Kemampuan finansial yang memadai",
        "Motivasi tinggi untuk belajar",
        "Kesehatan jasmani dan rohani yang baik",
      ],
    },
    internship: {
      name: "Internship Program",
      description: "インターンシップ",
      hero: "https://images.unsplash.com/photo-1574130303188-31a915382726?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85",
      overview:
        "Program Internship memberikan kesempatan bagi mahasiswa dan fresh graduate untuk mendapatkan pengalaman kerja langsung di perusahaan-perusahaan Jepang terkemuka.",
      features: [
        "Penempatan magang di perusahaan multinasional",
        "Pelatihan bahasa Jepang bisnis",
        "Mentoring dari profesional berpengalaman",
        "Sertifikat kompetensi internasional",
        "Networking dengan industri Jepang",
        "Peluang full-time employment",
      ],
      curriculum: [
        {
          phase: "Persiapan",
          duration: "2 bulan",
          content: "Bahasa Jepang bisnis dan etika kerja",
        },
        {
          phase: "Orientasi",
          duration: "1 minggu",
          content: "Pengenalan perusahaan dan budaya kerja",
        },
        {
          phase: "Magang",
          duration: "6-12 bulan",
          content: "Praktik kerja langsung dengan supervisor",
        },
        {
          phase: "Evaluasi",
          duration: "1 bulan",
          content: "Assessment dan sertifikasi kompetensi",
        },
      ],
      requirements: [
        "Mahasiswa semester akhir atau fresh graduate",
        "Jurusan relevan dengan bidang magang",
        "Kemampuan bahasa Jepang minimal N4",
        "IPK minimal 3.0",
        "Pengalaman organisasi/leadership",
      ],
    },
    professional: {
      name: "Professional Program",
      description: "技術・人文知識・国際業務",
      hero: "https://images.unsplash.com/photo-1581093059756-acf6718c0ab1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcmluZyUyMHdvcmtlcnN8ZW58MHx8fGJsdWV8MTc1MzAyNzk4MXww&ixlib=rb-4.1.0&q=85",
      overview:
        "Program Professional ditujukan untuk profesional berpengalaman dalam bidang teknologi, humaniora, dan bisnis internasional yang ingin berkarir di Jepang.",
      features: [
        "Assessment keahlian dan kompetensi",
        "Job matching dengan perusahaan partner",
        "Dukungan aplikasi visa kerja",
        "Career coaching dan development",
        "Pelatihan bahasa bisnis Jepang",
        "Long-term career planning",
      ],
      curriculum: [
        {
          phase: "Assessment",
          duration: "1 bulan",
          content: "Evaluasi skill dan career mapping",
        },
        {
          phase: "Preparation",
          duration: "2 bulan",
          content: "Bahasa bisnis dan skill enhancement",
        },
        {
          phase: "Job Matching",
          duration: "1-3 bulan",
          content: "Interview dan negotiation process",
        },
        {
          phase: "Integration",
          duration: "3 bulan",
          content: "Onboarding dan adaptation support",
        },
      ],
      requirements: [
        "Pengalaman kerja minimal 3 tahun",
        "Gelar sarjana dari universitas terakreditasi",
        "Keahlian spesifik sesuai bidang",
        "Kemampuan bahasa Jepang minimal N3",
        "Track record prestasi profesional",
      ],
    },
    "kerja-magang": {
      name: "Kerja Magang",
      description: "技能実習生",
      hero: "https://images.unsplash.com/photo-1659354220856-481085fa9585?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwd29ya2Vyc3xlbnwwfHx8Ymx1ZXwxNzUzMDI3OTk1fDA&ixlib=rb-4.1.0&q=85",
      overview:
        "Program Kerja Magang memberikan pelatihan intensif dan penempatan kerja di berbagai sektor industri Jepang dengan fokus pada pengembangan keterampilan teknis.",
      features: [
        "Pelatihan teknis sesuai bidang kerja",
        "Bahasa Jepang dasar untuk komunikasi kerja",
        "Orientasi budaya dan etos kerja Jepang",
        "Monitoring berkala dan evaluation",
        "Sertifikasi keahlian teknis",
        "Program transfer skill",
      ],
      curriculum: [
        {
          phase: "Pre-Training",
          duration: "3 bulan",
          content: "Bahasa Jepang dan orientasi budaya",
        },
        {
          phase: "Technical Training",
          duration: "2 bulan",
          content: "Pelatihan keterampilan teknis spesifik",
        },
        {
          phase: "On-Job Training",
          duration: "1 tahun",
          content: "Praktik kerja dengan supervisor",
        },
        {
          phase: "Advanced Training",
          duration: "2 tahun",
          content: "Pengembangan skill lanjutan",
        },
      ],
      requirements: [
        "Lulusan SMK/SMA sederajat",
        "Usia 18-35 tahun",
        "Kondisi fisik dan mental yang sehat",
        "Tidak memiliki riwayat kriminal",
        "Motivasi kerja yang tinggi",
      ],
    },
    ssw: {
      name: "SSW/Specified Skilled Worker",
      description: "特定技能",
      hero: "https://images.unsplash.com/photo-1614127938540-a1139bee1841?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHxibHVlfDE3NTMwMjc5ODh8MA&ixlib=rb-4.1.0&q=85",
      overview:
        "Program SSW dirancang untuk pekerja terampil yang ingin bekerja di sektor-sektor prioritas Jepang dengan peluang permanent residency.",
      features: [
        "Persiapan ujian keahlian SSW",
        "Pelatihan bahasa Jepang level A2",
        "Penempatan langsung di perusahaan",
        "Path to permanent residency",
        "Competitive salary package",
        "Long-term career development",
      ],
      curriculum: [
        {
          phase: "Preparation",
          duration: "4 bulan",
          content: "Bahasa Jepang A2 dan skill assessment",
        },
        {
          phase: "Certification",
          duration: "1 bulan",
          content: "Ujian SSW dan sertifikasi",
        },
        {
          phase: "Job Placement",
          duration: "1 bulan",
          content: "Interview dan contract negotiation",
        },
        {
          phase: "Integration",
          duration: "6 bulan",
          content: "Workplace adaptation dan monitoring",
        },
      ],
      requirements: [
        "Pengalaman kerja relevan minimal 2 tahun",
        "Lulus ujian keahlian SSW",
        "Kemampuan bahasa Jepang level A2/N4",
        "Usia maksimal 40 tahun",
        "Komitmen kerja jangka panjang",
      ],
    },
  };

  const program = programData[slug];

  if (!program) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Program Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-8">
          Program yang Anda cari tidak tersedia.
        </p>
        <a
          href="/programs"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kembali ke Programs
        </a>
      </div>
    );
  }

  const isDarkText =
    slug === "student" || slug === "ssw" || slug === "kerja-magang";

  return (
    <div>
      {/* Hero Section */}
      <section
        className={`relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden ${
          isDarkText ? "text-black" : "text-white"
        }`}
      >
        <div className="py-20">
          <div className="absolute inset-0 opacity-20">
            <img
              src={program.hero}
              alt={program.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {program.name}
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 ${
                isDarkText ? "text-black/80" : "text-blue-100"
              }`}
            >
              {program.description}
            </p>
            <p
              className={`text-lg max-w-3xl mx-auto leading-relaxed ${
                isDarkText ? "text-black/70" : "text-blue-50"
              }`}
            >
              {program.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Fitur Program
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.features.map((feature: any, index: any) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kurikulum
                </h3>
                <div className="flex flex-col gap-4">
                  {program.curriculum.map((phase: any, index: number) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6"
                    >
                      <div className="flex items-center mb-2 gap-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.phase}
                        </h3>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Requirements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Persyaratan
                </h3>
                <ul className="space-y-3">
                  {program.requirements.map((req: any, index: any) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{req}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Siap Bergabung?</h3>
                <p className="mb-6 text-blue-100">
                  Mulai perjalanan karier Anda di Jepang dengan program{" "}
                  {program.name}
                </p>
                <div className="space-y-3">
                  <a
                    href="/apply"
                    className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Daftar Sekarang
                  </a>
                  <a
                    href="/contact"
                    className="block w-full border-2 border-white text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Konsultasi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetails;
