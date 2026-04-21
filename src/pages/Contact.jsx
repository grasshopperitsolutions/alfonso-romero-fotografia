import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAlert } from "../hooks/useAlert";
import { directWhatsApp } from "../utils/whatsapp";
import SEOMeta from "../components/SEOMeta";

// --- ÍCONOS SVG ---
const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Opciones del proyecto basadas en los pilares del documento
const projectOptions = [
  { value: "arquitectura", label: "Arquitectura & Espacios" },
  { value: "retrato", label: "Retrato Documental y Editorial" },
  { value: "consultoria", label: "Consultoría & Dirección Visual" },
  { value: "otro", label: "Otro" },
];

// Validación de email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function Contact() {
  const { t } = useTranslation();
  const { showSuccess, showError, showWarning } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  // Estados para el Dropdown Personalizado
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar el dropdown al hacer click fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Manejar selección del dropdown
  const handleProjectSelect = (value) => {
    setFormData((prev) => ({ ...prev, project: value }));
    setIsDropdownOpen(false);
  };

  // Validar formulario
  const validateForm = () => {
    // Validar nombre
    if (!formData.name.trim()) {
      showError("El nombre completo es obligatorio.");
      return false;
    }

    // Validar email
    if (!formData.email.trim()) {
      showError("El correo electrónico es obligatorio.");
      return false;
    }
    if (!isValidEmail(formData.email)) {
      showError("Por favor, ingresa un correo electrónico válido.");
      return false;
    }

    // Validar tipo de proyecto
    if (!formData.project) {
      showError("Debes seleccionar un tipo de proyecto.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    // Validar formulario antes de enviar
    if (!validateForm()) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] flex flex-col font-sans selection:bg-white selection:text-black">
      <SEOMeta page="contact" />

      {/* ESTILOS GLOBALES Y ANIMACIONES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }

        /* Estilos pulidos para los inputs (Floating labels effect) */
        .slick-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          padding: 12px 0;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          transition: all 0.3s ease;
          border-radius: 0;
        }
        .slick-input:focus {
          outline: none;
          border-bottom-color: white;
          box-shadow: 0 1px 0 0 white;
        }
        .slick-input::placeholder {
          color: transparent;
        }
        
        .floating-label {
          position: absolute;
          left: 0;
          top: 12px;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .slick-input:focus ~ .floating-label,
        .slick-input:not(:placeholder-shown) ~ .floating-label,
        .floating-label.active {
          top: -16px;
          font-size: 0.65rem;
          color: white;
        }
      `,
        }}
      />

      {/* CONTENIDO PRINCIPAL: CONTACTO (Split Screen Layout) */}
      <main className="flex-grow pt-24 lg:pt-32 pb-0 flex flex-col">
        <div className="flex-grow max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 lg:mb-32">
          {/* COLUMNA IZQUIERDA: Textos y Datos Directos */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center mt-12 lg:mt-0 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1]">
              {t("contact.title_part1")} <br className="hidden lg:block" />
              <span className="italic text-gray-400">
                {t("contact.title_part2")}
              </span>
              <br />
              {t("contact.title_part3")}
            </h2>

            <div className="h-px w-20 bg-white/30 mb-8"></div>

            <p className="text-lg text-gray-300 font-light leading-relaxed mb-16 max-w-md">
              {t("contact.description")}
            </p>

            {/* Datos Directos */}
            <div className="space-y-6 animate-fade-up delay-100">
              <a
                href="mailto:fueradecasa.co@gmail.com"
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group w-max"
              >
                <span className="p-3 border border-white/10 rounded-full group-hover:border-white/40 transition-colors">
                  <MailIcon />
                </span>
                <span className="font-light tracking-wide text-sm">
                  fueradecasa.co@gmail.com
                </span>
              </a>

              <button
                onClick={directWhatsApp}
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group w-max"
              >
                <span className="p-3 border border-white/10 rounded-full group-hover:border-white/40 transition-colors">
                  <WhatsAppIcon />
                </span>
                <span className="font-light tracking-wide text-sm">
                  +34 613 42 74 49
                </span>
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: El Formulario "Slick" */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center animate-fade-up delay-200">
            <div className="bg-[#111] p-8 md:p-12 lg:p-16 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.04] transition-colors duration-700"></div>

              <form
                action="https://formsubmit.co/7a38041d4508227ac091223c2d542bd3"
                method="POST"
                onSubmit={handleSubmit}
                className="relative z-10 space-y-10"
              >
                {/* Grupo: Nombre */}
                <div className="relative pt-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="slick-input peer"
                    placeholder={t("contact.form.name_placeholder")}
                  />
                  <label htmlFor="name" className="floating-label">
                    {t("contact.form.name_label")}
                  </label>
                </div>

                {/* Grupo: Correo */}
                <div className="relative pt-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="slick-input peer"
                    placeholder={t("contact.form.email_placeholder")}
                  />
                  <label htmlFor="email" className="floating-label">
                    {t("contact.form.email_label")}
                  </label>
                </div>

                {/* Grupo: Tipo de Proyecto (Dropdown Personalizado) */}
                <div className="relative pt-4" ref={dropdownRef}>
                  <input
                    type="hidden"
                    name="project"
                    value={
                      projectOptions.find((o) => o.value === formData.project)
                        ?.label
                    }
                  />
                  <div
                    className={`slick-input cursor-pointer relative ${!formData.project ? "" : ""}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span
                      className={`block truncate ${formData.project ? "text-white" : "text-transparent"}`}
                    >
                      {formData.project
                        ? projectOptions.find(
                            (o) => o.value === formData.project,
                          )?.label
                        : t("contact.form.project_placeholder")}
                    </span>

                    {/* Etiqueta flotante manual controlada por estado */}
                    <label
                      className={`floating-label ${formData.project || isDropdownOpen ? "active" : ""}`}
                    >
                      {t("contact.form.project_label")}
                    </label>

                    {/* Ícono de flecha animado */}
                    <div
                      className={`absolute right-0 top-3 pointer-events-none text-gray-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Menú Desplegable Customizado */}
                  <div
                    className={`absolute left-0 w-full mt-1 bg-[#1a1a1a] border border-white/10 z-50 transition-all duration-300 origin-top shadow-2xl ${isDropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
                  >
                    <ul className="py-2 m-0">
                      {projectOptions.map((option) => (
                        <li
                          key={option.value}
                          className={`px-4 py-3 text-sm font-light cursor-pointer transition-colors ${formData.project === option.value ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                          onClick={() => handleProjectSelect(option.value)}
                        >
                          {t(`contact.form.project_options.${option.value}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Grupo: Mensaje */}
                <div className="relative pt-4">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="slick-input peer resize-none"
                    placeholder={t("contact.form.message_placeholder")}
                  ></textarea>
                  <label htmlFor="message" className="floating-label">
                    {t("contact.form.message_label")}
                  </label>
                </div>

                {/* Botón de Enviar */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 border border-white bg-white text-black text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative overflow-hidden ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-transparent hover:text-white"}`}
                  >
                    {isSubmitting
                      ? t("contact.form.submitting")
                      : t("contact.form.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
