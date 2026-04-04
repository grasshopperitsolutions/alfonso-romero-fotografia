import { useAlertContext } from "../context/AlertContext";

// --- SVG ICONS ---
const CloseIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const alertStyles = {
  success: {
    border: "border-white/20",
    bg: "bg-white/10",
    text: "text-white",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  error: {
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    text: "text-red-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
  warning: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-200",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  },
  info: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
};

export default function Alert() {
  const { alert, hideAlert } = useAlertContext();
  const style = alertStyles[alert.type] || alertStyles.info;

  if (!alert.show) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(50px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .animate-toast-in {
              animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />
      <div
        className={`fixed bottom-8 right-8 z-[100] flex items-center space-x-4 p-5 border ${style.border} ${style.bg} backdrop-blur-xl animate-toast-in min-w-[320px] max-w-md shadow-2xl`}
      >
        <div className={`${style.text}`}>{style.icon}</div>
        <div className="flex-grow">
          <p
            className={`text-[10px] uppercase tracking-[0.2em] font-medium opacity-50 mb-1 ${style.text}`}
          >
            {alert.type}
          </p>
          <p
            className={`text-xs tracking-widest font-light leading-relaxed ${style.text}`}
          >
            {alert.message}
          </p>
        </div>
        <button
          onClick={hideAlert}
          className="p-1 hover:bg-white/10 rounded-full transition-colors opacity-40 hover:opacity-100"
          aria-label="Cerrar alerta"
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}