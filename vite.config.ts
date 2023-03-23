import react from "@vitejs/plugin-react";
import { AliasOptions, defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { tscPlugin } from "vite-plugin-tsc-watch";

import path from "path";

const getAlias = (aliases: string[]): AliasOptions =>
  aliases.map((alias) => ({
    find: alias,
    replacement: path.resolve(__dirname, "src", alias),
  }));

const alias: AliasOptions = getAlias([
  "components",
  "types",
  "mocks",
  "assets",
  "pages",
  "api",
  "forms",
  "constants",
  "shared",
  "hocs",
  "hooks",
  "utils",
  "helpers",
  "state",
  "router",
  "interfaces",
  "app",
]);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tscPlugin(),
    svgr({
      exportAsDefault: false,
    }),
  ],
  resolve: {
    alias,
  },
  appType: "spa",
});
