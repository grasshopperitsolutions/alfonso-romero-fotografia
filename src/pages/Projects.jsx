import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOMeta from "../components/SEOMeta";
import ProjectCard from "../components/ProjectCard";
import ProjectAccordion from "../components/ProjectAccordion";
import CloseIcon from "../components/icons/CloseIcon";

// Project 1 images
import project1_1 from "../assets/pilar-1/project-1/1.jpeg";
import project1_2 from "../assets/pilar-1/project-1/2.jpeg";
import project1_3 from "../assets/pilar-1/project-1/3.jpeg";
import project1_4 from "../assets/pilar-1/project-1/4.jpeg";
import project1_5 from "../assets/pilar-1/project-1/5.jpeg";
import project1_6 from "../assets/pilar-1/project-1/6.jpeg";

// Project 2 images
import project2_1 from "../assets/pilar-1/project-2/1.jpeg";
import project2_2 from "../assets/pilar-1/project-2/2.jpeg";
import project2_3 from "../assets/pilar-1/project-2/3.jpeg";
import project2_4 from "../assets/pilar-1/project-2/4.jpeg";
import project2_5 from "../assets/pilar-1/project-2/5.jpeg";

// Project 3 images
import project3_1 from "../assets/pilar-1/project-3/1.jpeg";
import project3_2 from "../assets/pilar-1/project-3/2.jpeg";
import project3_3 from "../assets/pilar-1/project-3/3.jpeg";
import project3_4 from "../assets/pilar-1/project-3/4.jpeg";
import project3_5 from "../assets/pilar-1/project-3/5.jpeg";

// Example projects using images from pilar-1 folder
const getExampleProjects = () => [
  {
    id: "project-1",
    title: "Proyecto Ejemplo 1",
    description:
      "Muestra de trabajo fotográfico con enfoque en detalles y composición visual.",
    images: [
      project1_1,
      project1_2,
      project1_3,
      project1_4,
      project1_5,
      project1_6,
    ],
  },
  {
    id: "project-2",
    title: "Proyecto Ejemplo 2",
    description:
      "Serie fotográfica que explora la relación entre la luz y las texturas naturales.",
    images: [
      project2_1,
      project2_2,
      project2_3,
      project2_4,
      project2_5,
    ],
  },
  {
    id: "project-3",
    title: "Proyecto Ejemplo 3",
    description:
      "Documentación visual de espacios arquitectónicos con un enfoque minimalista.",
    images: [
      project3_1,
      project3_2,
      project3_3,
      project3_4,
      project3_5,
    ],
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [activePillar, setActivePillar] = useState(null);

  const projects = [
    {
      id: "01",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      alt: t("projects.categories.architecture.title"),
      title: t("projects.categories.architecture.title"),
      description: t("projects.categories.architecture.description"),
      delay: "animation-delay-100",
    },
    {
      id: "02",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      alt: t("projects.categories.portrait.title"),
      title: t("projects.categories.portrait.title"),
      description: t("projects.categories.portrait.description"),
      delay: "animation-delay-200",
    },
    {
      id: "03",
      image:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=800&q=80",
      alt: t("projects.categories.brand.title"),
      title: t("projects.categories.brand.title"),
      description: t("projects.categories.brand.description"),
      delay: "animation-delay-300",
    },
    {
      id: "04",
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
      alt: t("projects.categories.everyday.title"),
      title: t("projects.categories.everyday.title"),
      description: t("projects.categories.everyday.description"),
      delay: "animation-delay-400",
    },
    {
      id: "05",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      alt: t("projects.categories.consulting.title"),
      title: t("projects.categories.consulting.title"),
      description: t("projects.categories.consulting.description"),
      delay: "animation-delay-500",
    },
  ];

  // Handle pillar click with smooth scroll
  const handlePillarClick = (pillarId) => {
    if (activePillar === pillarId) {
      setActivePillar(null);
    } else {
      setActivePillar(pillarId);
      setTimeout(() => {
        const section = document.getElementById("details-section");
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    }
  };

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
          {t("projects.header.subtitle")}
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6">
          {t("projects.header.title")}
        </h2>
        <div className="h-px w-24 bg-white/30 mx-auto"></div>
      </section>

      {/* GRID DE PILARES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((pillar) => (
            <div key={pillar.id} className={pillar.delay}>
              <ProjectCard
                {...pillar}
                isActive={activePillar === pillar.id}
                onClick={() => handlePillarClick(pillar.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DETALLADA DE PROYECTOS */}
      {activePillar && (
        <section
          id="details-section"
          className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 animate-fade-up"
        >
          <div className="border-t border-white/10 pt-16">
            {/* Pillar Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
              <div>
                <span className="text-xs font-sans tracking-widest text-gray-500 uppercase mb-2 block">
                  Portafolio Destacado
                </span>
                <h3 className="text-3xl lg:text-5xl font-serif text-white">
                  {projects.find((p) => p.id === activePillar)?.title}
                </h3>
              </div>
              <button
                onClick={() => handlePillarClick(activePillar)}
                className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors flex items-center group bg-white/5 hover:bg-white/10 px-6 py-3"
              >
                Ocultar Sección
                <CloseIcon className="ml-3 w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Project Accordions */}
            <div className="space-y-12">
              {getExampleProjects().map((project) => (
                <ProjectAccordion key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECCIÓN DE LLAMADO A LA ACCIÓN (CTA) */}
      <section className="reveal-on-scroll relative py-32 border-t border-white/10 bg-gradient-to-b from-brand-black to-brand-gray overflow-hidden">
        {/* Elemento decorativo geométrico */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-20"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            {t("projects.cta.title_part1")} <br className="hidden md:block" />
            <span className="italic text-gray-400">
              {t("projects.cta.title_part2")}
            </span>{" "}
            {t("projects.cta.title_part3")}
          </h2>
          <p className="text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            {t("projects.cta.description")}
          </p>

          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black text-sm uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              {t("projects.cta.button")}
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
