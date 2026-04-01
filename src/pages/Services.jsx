import ServiceCard from "../components/ServiceCard";

const services = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    alt: "Arquitectura",
    title: "Arquitectura & Espacios",
    description: "El rigor de la geometría y la danza de la luz sobre el concreto. Documentación del espacio construido.",
  },
  {
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=800&q=80",
    alt: "Estilo de Vida",
    title: "Producto & Estilo de Vida",
    description: "Honestidad en el proceso para conectar con la audiencia. Material orgánico que captura la vida real y posiciona la marca.",
  },
  {
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    alt: "Crónica",
    title: "Crónica de lo Cotidiano",
    description: "Proyectos personales, fotografía de calle en blanco y negro. Visión de autor e inmortalización de los instantes. (Opción de Prints).",
  },
  {
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    alt: "Consultoría",
    title: "Consultoría & Dirección Visual",
    description: "Acompañamiento estratégico para marcas que buscan una estética coherente, minimalista y de alto impacto visual.",
  },
];

export default function Services() {
  return (
    <section className="fade-in max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif mb-4">Pilares Visuales</h2>
        <p className="text-gray-400 font-light uppercase tracking-widest text-sm">
          Servicios / Proyectos / Soluciones visuales
        </p>
        <div className="h-px w-24 bg-white/30 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}