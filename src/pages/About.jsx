export default function About() {
  return (
    <section className="fade-in max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-white/5 transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
          <img
            src="https://images.unsplash.com/photo-1554046920-90dc5823ca0b?auto=format&fit=crop&w=800&q=80"
            alt="Retrato del fotógrafo"
            className="w-full h-auto object-cover img-monochrome"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif mb-4">
              La historia detrás del lente
            </h2>
            <div className="h-px w-20 bg-white/30" />
          </div>

          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
            <p className="text-white text-xl font-serif italic">
              "Soy el alma detrás del lente que captura las historias y las
              inmortaliza para ser contadas por siempre. La fotografía es mi
              salto de fe ante la indiferencia del mundo."
            </p>

            <h3 className="text-xl font-medium text-white tracking-wide mt-8">
              Capturando la estructura de lo invisible
            </h3>
            <p>
              Explorando la relación entre el espacio y quien lo habita, mi
              fotografía busca la perfección en la geometría y la honestidad
              en la emoción. No solo capturo lugares; documento la forma en
              que la luz y las sombras transforman nuestra percepción de la
              realidad.
            </p>
            <p>
              Mi enfoque combina el rigor técnico de la arquitectura con la
              sensibilidad de un observador silencioso. No persigo la luz;
              espero el momento en que la sombra revela la verdadera forma de
              las cosas.
            </p>
            <p>
              Mi fotografía es un ejercicio de silencio y observación, donde
              la geometría de los espacios deja de ser concreto para
              convertirse en sentimiento y narrar historias. Creo en la
              honestidad del reflejo y en la fuerza de una mirada que
              encuentra el orden en el caos visual. Cada captura es un
              compromiso con la emoción pura, congelada entre líneas, sombras
              y la arquitectura de lo invisible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}