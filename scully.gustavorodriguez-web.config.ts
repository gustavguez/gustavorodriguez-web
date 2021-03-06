import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'gustavorodriguez-web',
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/talks/:id': {
      type: 'contentFolder',
      id: {
        folder: './src/data/talks',
      },
    },
  },
};
