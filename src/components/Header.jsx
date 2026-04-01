import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Sobre Mí" },
    { to: "/services", label: "Pilares" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-brand-black" : "bg-brand-black/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-serif font-semibold tracking-wide"
        >
          FOTOGRAFÍA<span className="text-gray-500 font-sans font-light text-sm ml-2 hidden sm:inline-block">DE AUTOR</span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm tracking-widest font-light uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link hover:text-white ${
                location.pathname === link.to
                  ? "active text-white"
                  : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden bg-brand-black border-b border-white/10 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 text-sm tracking-widest font-light uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="text-gray-400 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}