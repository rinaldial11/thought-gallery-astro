import { CheckCircle } from "lucide-react";

type PostInterface = {
  slug: string;
  title: string;
  body?: string;
  image?: string | { id: string }; // tergantung struktur dari Directus
  category?: string;
};
interface kurikulumInterface {
  body: string;
  durasi: string;
  notes: string;
}

interface persyaratanInterface {
  body: string;
  durasi: string;
}

interface featureInterface {
  body: string;
}

function ProgramDetails({
  slug,
  post,
  pros,
  kurikulum,
  persyaratan,
  features,
}: {
  slug: string;
  post: PostInterface;
  pros: PostInterface[];
  kurikulum: kurikulumInterface[];
  persyaratan: persyaratanInterface[];
  features: featureInterface[];
}) {
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
              src={
                typeof post.image === "string"
                  ? post.image
                  : typeof post.image === "object" &&
                    post.image !== null &&
                    "id" in post.image
                  ? post.image.id
                  : undefined
              }
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 ${
                isDarkText ? "text-black/80" : "text-blue-100"
              }`}
            >
              {post.body}
            </p>
            {/* <p
              className={`text-lg max-w-3xl mx-auto leading-relaxed ${
                isDarkText ? "text-black/70" : "text-blue-50"
              }`}
            >
              {p}
            </p> */}
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
                <div className="grid md:grid-cols-2 items-center gap-4">
                  {features?.map((feature: any, index: any) => (
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
                      <p className="text-gray-700">{feature.body}</p>
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
                  {kurikulum?.map((phase: any, index: number) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6"
                    >
                      <div className="flex items-center mb-2 gap-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.body}
                        </h3>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.durasi}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col w-full">
              {/* Requirements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Persyaratan
                </h3>
                <ul className="space-y-3">
                  {persyaratan?.map((req: any, index: any) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{req.body}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg w-full">
                <h3 className="text-2xl font-bold mb-4">Siap Bergabung?</h3>
                <p className="mb-6 text-blue-100">
                  Mulai perjalanan karier Anda di Jepang dengan program{" "}
                  {post.title}
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
