function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 flex flex-col text-center">
        <div className="container mx-auto py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            PT. Multi Generasi Indonesia berkomitmen membuka peluang karier
            tanpa batas bagi generasi Indonesia untuk berkembang dan berkarir di
            Jepang.
          </p>
        </div>
      </section>
      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573497490790-9053816a01d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fGJsdWV8MTc1MzAyNzk1OXww&ixlib=rb-4.1.0&q=85"
                alt="Professional Learning"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Visi <span className="text-blue-600">Kami</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Menjadi yang terdepan dan terpercaya dalam membuka peluang tanpa
                batas bagi generasi Indonesia untuk berkembang dan berkarir di
                Jepang, dengan komitmen untuk memberikan pelayanan sumber daya
                manusia, konsultan, dan pendidikan terbaik.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Misi Kami
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">
                    Memberikan pelatihan bahasa Jepang berkualitas tinggi
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">
                    Menjalin kemitraan strategis dengan perusahaan Jepang
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">
                    Menyediakan dukungan komprehensif untuk kesuksesan karier
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Nilai-nilai Perusahaan */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kualitas
              </h3>
              <p className="text-gray-600">
                Berkomitmen memberikan pelayanan dan pendidikan dengan standar
                kualitas tertinggi untuk memastikan kesuksesan setiap peserta
                program.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3M7 8a3 3 0 100-6 3 3 0 000 6zm10-6a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kepercayaan
              </h3>
              <p className="text-gray-600">
                Membangun hubungan yang didasari kepercayaan dengan semua
                peserta, partner, dan stakeholder melalui transparansi dan
                integritas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Inovasi
              </h3>
              <p className="text-gray-600">
                Terus mengembangkan metode dan program pembelajaran terbaru
                untuk memberikan pengalaman belajar yang efektif dan
                menyenangkan.
              </p>
            </div>
          </div>

          {/* Perizinan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perizinan Resmi
            </h2>
            <div className="grid gap-6">
              {[
                "Izin SO/ Izin Penyelenggaraan Pemagangan di Luar Negeri No. 2/385/HK.13/XII/2019",
                "Izin Usaha Penempatan Tenaga Kerja Swasta No. 7/G.11/31.74.07.1003.04.023.K.2a.b.g/1//-1.837/2019",
                "Izin Lembaga Pelatihan Kerja No. 2/G.1.0/31.74.07/-1.837/2019",
                "Perizinan Berusaha Berbasis Risiko (SIP3MI) No. 81201141907610001",
              ].map((permit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{permit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
