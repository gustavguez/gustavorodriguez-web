import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "gustavorodriguez-web",
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'json',
      id: {
        url: 'https://pokeapi.co/api/v2/pokemon',
        property: 'name',
        resultsHandler: (response: any) => response.results
      }
    }
  }
};