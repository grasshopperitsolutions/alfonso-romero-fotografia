// Pillars data configuration
// Each pillar maps to translation keys in projects.categories.*
import architectureCover from "../assets/pilar-arquitectura/PORTADA.jpeg";
import documentalCover from "../assets/pilar-documental/PORTADA.jpeg";
import brandsCover from "../assets/pilar-marcas/PORTADA.jpeg";
import everydayCover from "../assets/pilar-cotidiano/PORTADA.jpeg";
import consultingCover from "../assets/pilar-consultoria/PORTADA.jpeg";

export const pillars = [
  {
    id: "01",
    pillarKey: "architecture",
    title: "projects.categories.architecture.title",
    description: "projects.categories.architecture.description",
    image: architectureCover,
    altKey: "projects.categories.architecture.title",
    delay: "animation-delay-100",
  },
  {
    id: "02",
    pillarKey: "portrait",
    title: "projects.categories.portrait.title",
    description: "projects.categories.portrait.description",
    image: documentalCover,
    altKey: "projects.categories.portrait.title",
    delay: "animation-delay-200",
  },
  {
    id: "03",
    pillarKey: "brand",
    title: "projects.categories.brand.title",
    description: "projects.categories.brand.description",
    image: brandsCover,
    altKey: "projects.categories.brand.title",
    delay: "animation-delay-300",
  },
  {
    id: "04",
    pillarKey: "everyday",
    title: "projects.categories.everyday.title",
    description: "projects.categories.everyday.description",
    image: everydayCover,
    altKey: "projects.categories.everyday.title",
    delay: "animation-delay-400",
  },
  {
    id: "05",
    pillarKey: "consulting",
    title: "projects.categories.consulting.title",
    description: "projects.categories.consulting.description",
    image: consultingCover,
    altKey: "projects.categories.consulting.title",
    delay: "animation-delay-500",
  },
];

/**
 * Get pillar by its id (e.g. "01")
 */
export const getPillarById = (id) =>
  pillars.find((p) => p.id === id) || null;

/**
 * Get pillar by its pillarKey (e.g. "architecture")
 */
export const getPillarByKey = (key) =>
  pillars.find((p) => p.pillarKey === key) || null;