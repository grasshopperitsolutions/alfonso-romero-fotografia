import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { directWhatsApp } from "../utils/whatsapp";
import profileImg from "../assets/profile.jpeg";
import SEOMeta from "../components/SEOMeta";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOMeta page="about" />
    <section className="fade-in max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Columna Izquierda: Imagen */}
        <div className="relative group w-full">
          {/* Cuadro decorativo de fondo */}
          <div className="absolute inset-0 bg-white/5 transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

          {/* Contenedor de la imagen para evitar desbordamiento al hacer scale */}
          <div className="w-full overflow-hidden">
            <img
              src={profileImg}
              alt={t('about.image_alt')}
              className="w-full h-auto object-cover object-center img-monochrome"
              loading="lazy"
            />
          </div>
        </div>

        {/* Columna Derecha: Textos y Storytelling */}
        <div className="space-y-10">
          {/* Título Principal */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif mb-4 leading-tight">
              {t('about.title')}
            </h2>
            <div className="h-px w-24 bg-white/30" />
          </div>

          {/* Cuerpo del texto */}
          <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
            {/* Cita destacada */}
            <p className="text-white text-2xl lg:text-3xl font-serif italic border-l-2 border-white/20 pl-6 py-2">
              "{t('about.quote')}"
            </p>

            <div className="pt-4 space-y-6">
              <h3 className="text-xl font-medium text-white tracking-widest uppercase text-sm mb-4">
                {t('about.subtitle')}
              </h3>

              <p>
                {t('about.paragraph1')}
              </p>

              <p>
                {t('about.paragraph2')}
              </p>

              <p>
                {t('about.paragraph3')}
              </p>
            </div>
          </div>

          {/* Botones Call to Action */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 text-center"
            >
              {t('about.cta_project')}
            </Link>
            <button
              onClick={directWhatsApp}
              className="inline-block px-10 py-4 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-green-600 hover:border-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
              title="Enviar mensaje por WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('about.cta_whatsapp')}
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
