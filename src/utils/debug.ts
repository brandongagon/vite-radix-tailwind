const DEBUG_ENABLED = import.meta.env.VITE_DEBUG === 'true';

export const debug = {
  log: (...args: unknown[]) => {
    if (DEBUG_ENABLED) {
      console.log(...args);
    }
  }
};