import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  plugins: [sass()],
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
};
