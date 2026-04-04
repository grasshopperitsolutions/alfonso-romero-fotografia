import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { registerAlertCallbacks } from "../utils/alertMethods";

const AlertContext = createContext(undefined);

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState({
    show: false,
    type: "info",
    message: "",
  });

  const showAlert = useCallback((type, message, duration = 5000) => {
    // Clear any existing timeout
    if (alert.timeoutId) {
      clearTimeout(alert.timeoutId);
    }

    setAlert({ show: true, type, message });

    const timeoutId = setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, duration);

    // Store timeoutId in state for cleanup
    setAlert((prev) => ({ ...prev, timeoutId }));
  }, [alert.timeoutId]);

  const hideAlert = useCallback(() => {
    if (alert.timeoutId) {
      clearTimeout(alert.timeoutId);
    }
    setAlert({ show: false, type: "info", message: "" });
  }, [alert.timeoutId]);

  const showSuccess = useCallback((message) => showAlert("success", message), [showAlert]);
  const showError = useCallback((message) => showAlert("error", message), [showAlert]);
  const showWarning = useCallback((message) => showAlert("warning", message), [showAlert]);
  const showInfo = useCallback((message) => showAlert("info", message), [showAlert]);

  // Register global callbacks for utility functions
  useEffect(() => {
    registerAlertCallbacks({
      success: showSuccess,
      error: showError,
      warning: showWarning,
      info: showInfo,
    });
  }, [showSuccess, showError, showWarning, showInfo]);

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert, showSuccess, showError, showWarning, showInfo }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlertContext() {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
}