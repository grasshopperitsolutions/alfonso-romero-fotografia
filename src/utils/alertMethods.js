/**
 * Global alert methods utility
 * 
 * These functions provide a simple way to show alerts from anywhere in the application.
 * They use a global callback pattern that works without React hooks.
 * 
 * IMPORTANT: The AlertProvider must be set up in your app for these to work.
 * The AlertProvider registers these callbacks when it mounts.
 */

// Global callbacks registry
let alertCallbacks = {
  success: null,
  error: null,
  warning: null,
  info: null,
};

/**
 * Register alert callbacks (called internally by AlertProvider)
 * @param {Object} callbacks - Object containing callback functions
 */
export function registerAlertCallbacks(callbacks) {
  alertCallbacks = { ...alertCallbacks, ...callbacks };
}

/**
 * Show a success alert
 * @param {string} message - The message to display
 */
export function showSuccess(message) {
  if (alertCallbacks.success) {
    alertCallbacks.success(message);
  } else {
    console.warn("Alert callbacks not registered. Make sure AlertProvider is set up.");
  }
}

/**
 * Show an error alert
 * @param {string} message - The message to display
 */
export function showError(message) {
  if (alertCallbacks.error) {
    alertCallbacks.error(message);
  } else {
    console.warn("Alert callbacks not registered. Make sure AlertProvider is set up.");
  }
}

/**
 * Show a warning alert
 * @param {string} message - The message to display
 */
export function showWarning(message) {
  if (alertCallbacks.warning) {
    alertCallbacks.warning(message);
  } else {
    console.warn("Alert callbacks not registered. Make sure AlertProvider is set up.");
  }
}

/**
 * Show an info alert
 * @param {string} message - The message to display
 */
export function showInfo(message) {
  if (alertCallbacks.info) {
    alertCallbacks.info(message);
  } else {
    console.warn("Alert callbacks not registered. Make sure AlertProvider is set up.");
  }
}