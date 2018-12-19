import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'toggles',
  copy: [{ src: 'config.js', dest: 'config.js' }],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
