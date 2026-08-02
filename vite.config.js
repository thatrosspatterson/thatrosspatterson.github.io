// vite.config.js
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import {resolve} from "path";

export default defineConfig({
  base: '/',
	plugins: [injectHTML()],
	build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        "projects": resolve(import.meta.dirname, 'projects.html'),
        "contact": resolve(import.meta.dirname, 'contact.html'),
        "resume": resolve(import.meta.dirname, 'public/ross-patterson-resume.pdf'),
        "projects/game-catalog": resolve(import.meta.dirname, 'projects/game-catalog.html'),
        "projects/millionaire": resolve(import.meta.dirname, 'projects/millionaire.html'),
        "projects/elephant-book": resolve(import.meta.dirname, 'projects/elephant-book.html'),
        "projects/toy-library": resolve(import.meta.dirname, 'projects/toy-library.html'),
      },
    },
  },
});