import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import homeImg from "../assets/home.jpeg";
import SEOMeta from "../components/SEOMeta";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOMeta page="home" />
    <section className="fade-in relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={homeImg}
          alt={t('home.hero.image_alt')}
          className="w-full h-full object-cover opacity-30 img-monochrome"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
          {t('home.hero.title_part1')} <br />
          <span className="italic text-gray-400">
            {t('home.hero.title_part2')}
          </span>
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase text-gray-300 mb-10">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            {t('home.hero.cta_portfolio')}
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-white/30 text-white text-sm uppercase tracking-widest hover:border-white transition-colors w-full sm:w-auto"
          >
            {t('home.hero.cta_contact')}
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
