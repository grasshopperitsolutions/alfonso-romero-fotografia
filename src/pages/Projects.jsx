import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import SEOMeta from "../components/SEOMeta";

export default function Projects() {
  const { t } = useTranslation();
  
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=c=crop&w=800&q=80",
      alt: t('projects.categories.architecture.title'),
      title: t('projects.categories.architecture.title'),
      description: t('projects.categories.architecture.description'),
      delay: "animation-delay-100",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      alt: t('projects.categories.portrait.title'),
      title: t('projects.categories.portrait.title'),
      description: t('projects.categories.portrait.description'),
      delay: "animation-delay-200",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=800&q=80",
      alt: t('projects.categories.brand.title'),
      title: t('projects.categories.brand.title'),
      description: t('projects.categories.brand.description'),
      delay: "animation-delay-300",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
      alt: t('projects.categories.everyday.title'),
      title: t('projects.categories.everyday.title'),
      description: t('projects.categories.everyday.description'),
      delay: "animation-delay-400",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      alt: t('projects.categories.consulting.title'),
      title: t('projects.categories.consulting.title'),
      description: t('projects.categories.consulting.description'),
      delay: "animation-delay-500",
    },
  ];

  // Scroll reveal functionality
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-on-scroll");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <SEOMeta page="projects" />
      
      {/* TÍTULO DE SECCIÓN */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16 text-center animate-fade-up">
        <h1 className="text-sm tracking-[0.3em] uppercase text-gray-500 font-light mb-4">
          {t('projects.header.subtitle')}
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6">
          {t('projects.header.title')}
        </h2>
        <div className="h-px w-24 bg-white/30 mx-auto"></div>
      </section>

      {/* GRID DE PILARES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div key={project.title} className={project.delay}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE LLAMADO A LA ACCIÓN (CTA) */}
      <section className="reveal-on-scroll relative py-32 border-t border-white/10 bg-gradient-to-b from-brand-black to-brand-gray overflow-hidden">
        {/* Elemento decorativo geométrico */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-20"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            {t('projects.cta.title_part1')}{" "}
            <br className="hidden md:block" />
            <span className="italic text-gray-400">{t('projects.cta.title_part2')}</span> {t('projects.cta.title_part3')}
          </h2>
          <p className="text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            {t('projects.cta.description')}
          </p>

          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black text-sm uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              {t('projects.cta.button')}
              {/* Arrow icon */}
              <svg
                className="w-5 h-5 inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            {/* Efecto hover del botón */}
            <div className="absolute inset-0 h-full w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
          </a>
        </div>
      </section>
    </div>
  );
}