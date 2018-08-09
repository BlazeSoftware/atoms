import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  plugins: [ sass() ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
