const DEBUG_ENABLED = import.meta.env.VITE_DEBUG === 'true';

export const debug = {
  log: (...args: unknown[]) => {
    if (DEBUG_ENABLED) {
      console.log(...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (DEBUG_ENABLED) {
      console.warn(...args);
    }
  },
  error: (...args: unknown[]) => {
    if (DEBUG_ENABLED) {
      console.error(...args);
    }
  }
};