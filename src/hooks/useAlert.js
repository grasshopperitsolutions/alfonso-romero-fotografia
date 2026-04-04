import { useAlertContext } from "../context/AlertContext";

/**
 * Custom hook to access global alert functionality
 * @returns {Object} Alert methods and state
 * @property {Function} showSuccess - Show success alert
 * @property {Function} showError - Show error alert
 * @property {Function} showWarning - Show warning alert
 * @property {Function} showInfo - Show info alert
 * @property {Object} alert - Current alert state
 * @property {Function} hideAlert - Hide current alert
 */
export function useAlert() {
  const { showSuccess, showError, showWarning, showInfo, alert, hideAlert } = useAlertContext();
  
  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    alert,
    hideAlert,
  };
}

export default useAlert;