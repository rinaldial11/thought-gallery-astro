import { useState } from "react";

function ApplyComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
    files: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      files: files,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Application Form Data:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
        files: [],
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Apply Now</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Mulai perjalanan karier Anda di Jepang bersama MUGEN Indonesia. Isi
            formulir aplikasi dan lampirkan dokumen yang diperlukan.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Formulir Aplikasi
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+62 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="program"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Program yang Diminati *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Pilih Program</option>
                      <option value="student">
                        Student Program - 留学サポート
                      </option>
                      <option value="internship">
                        Internship Program - インターンシップ
                      </option>
                      <option value="professional">
                        Professional Program - 技術・人文知識・国際業務
                      </option>
                      <option value="kerja-magang">
                        Kerja Magang - 技能実習生
                      </option>
                      <option value="ssw">
                        SSW/Specified Skilled Worker - 特定技能
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Pesan Tambahan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan tentang motivasi dan harapan Anda..."
                  ></textarea>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="files"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Lampiran Dokumen
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="files"
                      name="files"
                      multiple
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Format yang diterima: PDF, DOC, DOCX, JPG, PNG (Maksimal 5MB
                    per file)
                  </p>
                  {formData.files.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">
                        File yang dipilih:
                      </p>
                      <ul className="text-sm text-gray-600 mt-1">
                        {formData.files.map((file, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <span>📎</span>
                            <span>{file.name}</span>
                            <span className="text-gray-400">
                              ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Kirim Aplikasi
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Aplikasi Berhasil Dikirim!
                </h3>
                <p className="text-gray-600 mb-6">
                  Terima kasih atas minat Anda. Tim kami akan menghubungi Anda
                  dalam 1-2 hari kerja untuk proses selanjutnya. Periksa email
                  Anda secara berkala.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-700 font-medium">
                    📧 Email konfirmasi telah dikirim ke: {formData.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplyComponent;
