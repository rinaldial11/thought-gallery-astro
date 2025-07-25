import type { IRegisForm, IRegisRequest } from "@/type/registrant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schema-validation/register-schema";
import { useEffect, useState } from "react";
import { directus } from "@/lib/directus-instance";
import { createItem, uploadFiles } from "@directus/sdk";
import { showToast } from "./toaster";

function ApplyComponent() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IRegisForm>({
    resolver: yupResolver(registerSchema),
  });
  const [files, setFile] = useState([]);

  const uploadFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await directus.request(uploadFiles(formData));

      console.log(res);

      return res?.[0]?.id ?? null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const registerHandler = async (value: IRegisForm) => {
    try {
      const fileIds: string[] = [];

      for (const file of files) {
        try {
          const id = await uploadFile(file);
          if (id) fileIds.push(id);
        } catch (err) {
          console.error("Failed to upload", file.name, err);
          // bisa kasih notifikasi ke user, dll.
        }
      }

      await directus.request(
        createItem("registrant", {
          name: value.name,
          email: value.email,
          phone: value.phone,
          program: value.program,
          notes: value.notes,
          documents: fileIds, // ← relasi ke directus_files
        })
      );

      showToast(
        "Data Terkirim",
        "Data anda telah terkirim ke sistem",
        "success"
      );
      reset();
    } catch (error) {
      console.log(error);
      throw error;
    }
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
            <form
              onSubmit={handleSubmit(registerHandler)}
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
                    Nama Lengkap <span className="text-orange-500">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <div>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nomor Telepon <span className="text-orange-500">*</span>
                  </label>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+62 xxx xxx xxxx"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Program yang Diminati{" "}
                    <span className="text-orange-500">*</span>
                  </label>
                  <div>
                    <select
                      id="program"
                      {...register("program")}
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
                    {errors.program && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.program.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="notes"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Pesan Tambahan
                </label>
                <div>
                  <textarea
                    id="notes"
                    {...register("notes")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan tentang motivasi dan harapan Anda..."
                  ></textarea>
                  {errors.notes && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.notes.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="documents"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Lampiran Dokumen <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <div>
                    <input
                      type="file"
                      id="documents"
                      {...register("documents", {
                        // pakai manual handler agar value jadi FileList
                        onChange: (e) => {
                          const files = Array.from(e.target.files || []);
                          setFile((prev) => [...prev, ...files]);
                        },
                      })}
                      multiple
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    {errors.documents && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.documents.message}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Format yang diterima: PDF, DOC, DOCX, JPG, PNG (Maksimal 5MB
                  per file)
                </p>
                {files.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">
                      File yang dipilih:
                    </p>
                    <ul className="text-sm text-gray-600 mt-1">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span>📎</span>
                          <span>{file?.name}</span>
                          <span className="text-gray-400">
                            ({(file?.size / 1024 / 1024).toFixed(2)} MB)
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplyComponent;
