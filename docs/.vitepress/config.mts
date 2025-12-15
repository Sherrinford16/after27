import { defineConfig } from 'vitepress';
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig
})
