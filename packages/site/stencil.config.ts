import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import cssnano from 'cssnano';

export const config: Config = {
  globalStyle: 'src/scss/site.scss',
  plugins: [
    sass(),
    postcss({
      plugins: [
        cssnano({
          preset: [
            'default',
            {
              autoprefixer: { browsers: 'last 2 versions', add: true },
              zindex: false,
            },
          ],
        }),
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  copy: [{ src: 'robots.txt' }],
};
