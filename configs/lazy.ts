import lazyPlugin from 'vue3-lazy'
import DefaultImg from "@/assets/images/default.png";
import type { App } from 'vue'

/**
 * vue3-lazy 配置
 * @param app
 */
export function setupLazy (app: App<Element>): void {
  app.use(lazyPlugin, {
    loading: DefaultImg,
    // loading: images.default
  });
}
