/**
 * WhatsApp utility functions
 */

const PHONE_NUMBER = "1234567890"; // Replace with actual number

/**
 * Share the current page URL via WhatsApp
 */
export function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(
    "Echa un vistazo al portafolio de Fotografía de Autor: ",
  );
  window.open(`https://api.whatsapp.com/send?text=${text}${url}`, "_blank");
}

/**
 * Open direct WhatsApp chat with the photographer
 */
export function directWhatsApp() {
  const text = encodeURIComponent(
    "Hola, vi tu portafolio y tengo un proyecto en mente. Me gustaría conversar sobre él.",
  );
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, "_blank");
}