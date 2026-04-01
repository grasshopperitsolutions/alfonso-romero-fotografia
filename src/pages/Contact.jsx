import { useState } from "react";
import { directWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      e.target.reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="fade-in max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif mb-6">
              Tienes un proyecto en mente?<br />Hablemos.
            </h2>
            <p className="text-gray-300 font-light text-lg">
              Disponible para proyectos nacionales e internacionales.
            </p>
          </div>
          <div className="space-y-6 text-gray-400 font-light">
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:tu@correo.com" className="hover:text-white transition-colors">tu@correo.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <button onClick={directWhatsApp} className="hover:text-white transition-colors">+00 123 456 7890</button>
            </div>
          </div>
        </div>
        <div className="bg-brand-gray p-8 border border-white/5">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre Completo</label>
              <input type="text" required className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Correo Electronico</label>
              <input type="email" required className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tipo de Proyecto</label>
              <select className="w-full bg-brand-gray border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors appearance-none">
                <option value="arquitectura">Arquitectura y Espacios</option>
                <option value="retrato">Producto / Estilo de Vida</option>
                <option value="consultoria">Consultoria y Direccion Visual</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
              <textarea rows="4" placeholder="Cuentame mas sobre tu historia..." required className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors resize-none" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-gray-200 transition-colors mt-4 disabled:opacity-50">
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
            {showSuccess && <div className="text-green-400 text-sm mt-4 text-center">Mensaje enviado correctamente.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}