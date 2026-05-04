// Projects data configuration
// Each project is linked to a pillar via pillarKey

// === ARQUITECTURA — "España Entre Líneas" ===
import arq_1 from "../assets/pilar-arquitectura/project-1/1AR.jpeg";
import arq_2 from "../assets/pilar-arquitectura/project-1/2AR.jpeg";
import arq_3 from "../assets/pilar-arquitectura/project-1/3AR.jpeg";
import arq_4 from "../assets/pilar-arquitectura/project-1/4AR.jpeg";
import arq_5 from "../assets/pilar-arquitectura/project-1/5AR.jpeg";
import arq_6 from "../assets/pilar-arquitectura/project-1/6AR.jpeg";
import arq_7 from "../assets/pilar-arquitectura/project-1/7AR.jpeg";
import arq_8 from "../assets/pilar-arquitectura/project-1/8AR.jpeg";
import arq_9 from "../assets/pilar-arquitectura/project-1/9AR.jpeg";
import arq_10 from "../assets/pilar-arquitectura/project-1/10AR.jpeg";
import arq_11 from "../assets/pilar-arquitectura/project-1/11AR.jpeg";
import arq_12 from "../assets/pilar-arquitectura/project-1/12AR.jpeg";
import arq_13 from "../assets/pilar-arquitectura/project-1/13AR.jpeg";
import arq_14 from "../assets/pilar-arquitectura/project-1/14AR.jpeg";
import arq_15 from "../assets/pilar-arquitectura/project-1/15AR.jpeg";

// === DOCUMENTAL — "Proyecto G" ===
import doc_1 from "../assets/pilar-documental/project-1/1RD.jpg";
import doc_2 from "../assets/pilar-documental/project-1/2RD.jpg";
import doc_3 from "../assets/pilar-documental/project-1/3RD.jpg";
import doc_4 from "../assets/pilar-documental/project-1/4RD.jpg";
import doc_5 from "../assets/pilar-documental/project-1/5RD.jpeg";
import doc_6 from "../assets/pilar-documental/project-1/6RD.jpeg";
import doc_7 from "../assets/pilar-documental/project-1/7RD.jpeg";
import doc_8 from "../assets/pilar-documental/project-1/8RD.jpeg";
import doc_9 from "../assets/pilar-documental/project-1/9RD.jpeg";
import doc_portada from "../assets/pilar-documental/project-1/PORTADA.jpeg";

// === MARCAS — "Nuestra historia en España detrás de la Pizza Romana" ===
import mar_1 from "../assets/pilar-marcas/project-1/1.jpg";
import mar_2 from "../assets/pilar-marcas/project-1/2.jpg";
import mar_3 from "../assets/pilar-marcas/project-1/3.jpg";
import mar_4 from "../assets/pilar-marcas/project-1/4.jpg";
import mar_5 from "../assets/pilar-marcas/project-1/5.jpg";
import mar_6 from "../assets/pilar-marcas/project-1/6.jpg";
import mar_7 from "../assets/pilar-marcas/project-1/7.jpg";
import mar_8 from "../assets/pilar-marcas/project-1/8.jpg";
import mar_portada from "../assets/pilar-marcas/project-1/PORTADA.jpeg";

// === COTIDIANO — "Proyecto en Construcción 🚧" ===
import cot_1 from "../assets/pilar-cotidiano/project-1/WhatsApp Image 2026-05-03 at 2.40.45 PM (1).jpeg";
import cot_2 from "../assets/pilar-cotidiano/project-1/WhatsApp Image 2026-05-03 at 2.40.46 PM.jpeg";
import cot_3 from "../assets/pilar-cotidiano/project-1/WhatsApp Image 2026-05-03 at 2.40.48 PM (3).jpeg";

// === CONSULTORIA — "Proyecto Aratoca en Hilos" ===
import con_portada from "../assets/pilar-consultoria/project-1/PORTADA.jpeg";

const projects = [
  {
    id: "architecture-01",
    pillarKey: "architecture",
    title: "España Entre Líneas",
    images: [
      arq_1, arq_2, arq_3, arq_4, arq_5,
      arq_6, arq_7, arq_8, arq_9, arq_10,
      arq_11, arq_12, arq_13, arq_14, arq_15,
    ],
  },
  {
    id: "portrait-01",
    pillarKey: "portrait",
    title: "Proyecto G",
    images: [
      doc_1, doc_2, doc_3, doc_4, doc_5,
      doc_6, doc_7, doc_8, doc_9, doc_portada,
    ],
  },
  {
    id: "brand-01",
    pillarKey: "brand",
    title: "Nuestra historia en España detrás de la Pizza Romana",
    images: [
      mar_1, mar_2, mar_3, mar_4, mar_5,
      mar_6, mar_7, mar_8, mar_portada,
    ],
  },
  {
    id: "everyday-01",
    pillarKey: "everyday",
    title: "Proyecto en Construcción 🚧",
    images: [cot_1, cot_2, cot_3],
  },
  {
    id: "consulting-01",
    pillarKey: "consulting",
    title: "Proyecto Aratoca en Hilos",
    images: [con_portada],
  },
];

/**
 * Get all projects belonging to a specific pillar
 * @param {string} pillarKey - e.g. "architecture", "portrait", etc.
 * @returns {Array} Array of project objects
 */
export const getProjectsByPillar = (pillarKey) =>
  projects.filter((p) => p.pillarKey === pillarKey);

/**
 * Get all projects
 * @returns {Array} All projects
 */
export const getAllProjects = () => projects;