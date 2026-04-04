import { Link } from "react-router-dom";

export default function FloatingContactButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-50 bg-white text-black p-4 rounded-full pulse-effect hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
      aria-label="Contactar"
    >
      {/* Icono de mensaje */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>

      {/* Tooltip "Hablemos" */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-max bg-[#1f1f1f] text-white text-xs tracking-widest uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Hablemos
      </span>
    </Link>
  );
}