import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'blaze-atoms',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  copy: [{ src: 'blaze.min.css' }],
};
