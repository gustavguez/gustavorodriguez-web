"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: "./src",
    projectName: "gustavorodriguez-web",
    outDir: './dist/static',
    routes: {
        '/blog/:id': {
            type: 'json',
            id: {
                url: 'https://pokeapi.co/api/v2/pokemon',
                property: 'name',
                resultsHandler: function (response) { return response.results; }
            }
        }
    }
};
