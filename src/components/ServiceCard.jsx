export default function ServiceCard({ image, alt, title, description }) {
  return (
    <div className="group relative overflow-hidden bg-brand-gray">
      <img
        src={image}
        alt={alt}
        className="w-full h-80 object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 img-monochrome"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-serif mb-2">{title}</h3>
        <p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </div>
  );
}