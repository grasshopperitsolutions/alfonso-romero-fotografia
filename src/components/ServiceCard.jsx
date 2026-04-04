export default function ServiceCard({ image, alt, title, description }) {
  return (
    <div className="service-card group relative overflow-hidden bg-brand-gray h-[450px] lg:h-[550px] animate-fade-up">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={alt}
          className="service-img w-full h-full object-cover"
        />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="service-content absolute inset-0 p-8 lg:p-12 flex flex-col justify-end z-10">
        <div className="mb-4">
          <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2">
            {title}
          </h3>
          <div className="h-px w-16 bg-white/30 mb-4"></div>
        </div>

        {/* Descripción que aparece en hover */}
        <div className="service-description">
          <p className="text-sm lg:text-base text-gray-300 font-light leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}