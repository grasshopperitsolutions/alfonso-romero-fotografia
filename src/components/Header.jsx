import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CameraIcon from "../assets/camera.svg?react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="text-white group-hover:text-gray-300 transition-colors duration-300">
            <CameraIcon />
          </div>
          <div className="text-xl font-serif font-semibold tracking-wide flex items-baseline">
            FOTOGRAFÍA
            <span className="text-gray-500 font-sans font-light text-sm ml-2 hidden sm:inline-block tracking-widest">
              DE AUTOR
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-8">
          <nav
            className="hidden md:flex space-x-8 text-sm tracking-widest font-light uppercase"
            role="navigation"
            aria-label={t("common.aria.main_nav")}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative pb-1 overflow-hidden group ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-gray-400 hover:text-white transition-colors duration-300"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${
                    location.pathname === link.to
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>
          {/* <LanguageSwitcher /> */}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50 relative"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="flex flex-col px-12 space-y-8 text-xl tracking-widest font-light uppercase"
          role="navigation"
          aria-label={t("common.aria.main_nav")}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${
                location.pathname === link.to ? "text-white" : "text-gray-500"
              } hover:text-white transition-colors`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          {/* <div className="pt-8 border-t border-white/10">
            <LanguageSwitcher />
          </div> */}
        </nav>
      </div>
    </header>
  );
}
