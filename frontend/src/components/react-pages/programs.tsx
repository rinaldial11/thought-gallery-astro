import { marked } from "marked";

type Program = {
  slug: string;
  title: string;
  body?: string;
  image?: string | { id: string }; // tergantung struktur dari Directus
  category?: string;
};

interface ProgramsPageProps {
  programs: Program[];
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ programs }) => {
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
            {programs.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={
                    typeof post.image === "string"
                      ? post.image
                      : post.image?.id
                      ? `${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${
                          post.image.id
                        }`
                      : ""
                  }
                  alt={post?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {post?.title}
                  </h3>
                  <div
                    className="text-gray-600 mb-6 prose-custom"
                    // set:html={content}
                    dangerouslySetInnerHTML={{
                      __html: marked(post.body.split("-")[0]?.trim() ?? ""),
                    }}
                  />
                  <a
                    href={`/programs/${post.slug}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Pelajari →
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
};

export default ProgramsPage;
