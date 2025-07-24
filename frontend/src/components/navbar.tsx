import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const programs = [
    { id: "student", name: "Student", description: "留学サポート" },
    { id: "internship", name: "Internship", description: "インターンシップ" },
    {
      id: "professional",
      name: "Professional",
      description: "技術・人文知識・国際業務",
    },
    { id: "kerja-magang", name: "Kerja Magang", description: "技能実習生" },
    {
      id: "ssw",
      name: "SSW/Specified Skilled Worker",
      description: "特定技能",
    },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full hrefp-0 z-50">
      <nav className="container mx-auhref md:pl-70 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">MUGEN</h1>
              <p className="text-sm text-gray-600">INDONESIA</p>
            </div>
          </a>
          {/* Deskhrefp Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </a>
            {/* Programs Dropdown */}
            <div className="relative">
              <div
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Programs
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
              {isProgramsOpen && (
                <div className="absolute hrefp-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {programs.map((program) => (
                    <a
                      key={program.id}
                      href={`/programs/${program.id}`}
                      className="block px-6 py-3 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      <div className="font-medium text-gray-900">
                        {program.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {program.description}
                      </div>
                    </a>
                  ))}
                  <div className="border-t border-gray-100 mt-2">
                    <a
                      href="/programs"
                      className="block px-6 py-3 text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      Lihat Semua Program →
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="/gallery"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="/apply"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Apply
            </a>
          </div>
          {/* Mobile menu buthrefn */}
          <div className="md:hidden">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="/programs"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Programs
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="/apply"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Apply
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
