import { setupStore } from "@/store";
import { setupLazy } from "@/configs/lazy";
import { setupSongs } from "@/configs/songs";
import { setupDirective } from "@/directives";




export default defineNuxtPlugin((nuxtApp) => { 
   const app = nuxtApp.vueApp;
  setupStore(app);
  setupLazy(app);
  setupDirective(app);
  setupSongs();


});

