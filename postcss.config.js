/**
 * Wrap the app's own styles (src/**, including <style> blocks in .vue files) in the
 * `lux-app` cascade layer.
 *
 * Vuetify 4 ships its CSS in cascade layers and its utility classes (d-none, pa-4, ...)
 * no longer use !important. Unlayered app styles would therefore always win over the
 * utilities, e.g. a scoped `.sidebar { display: flex }` silently defeats `d-none`.
 * Placing app styles between Vuetify's components and utilities (see public/layers.css)
 * restores the Vuetify 3 behaviour: app styles override components, utilities override
 * app styles. Rules that already declare their own `@layer` are left untouched.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

const KEEP_AT_TOP_LEVEL = new Set(["layer", "import", "charset"]);
const PROJECT_ROOT = path.dirname(fileURLToPath(import.meta.url));

// Only the project's own src/ folder, wherever the repo is checked out
const isAppStyle = (file) => {
  const relative = path.relative(PROJECT_ROOT, file.split("?")[0]).replace(/\\/g, "/");
  return relative.startsWith("src/") && !relative.includes("node_modules");
};

const layerAppStyles = () => ({
  postcssPlugin: "lux-layer-app-styles",
  Once(root, { AtRule }) {
    const file = root.source?.input.file;
    if (!file || !isAppStyle(file)) return;

    const nodes = root.nodes.filter(
      (node) => !(node.type === "atrule" && KEEP_AT_TOP_LEVEL.has(node.name))
    );
    if (nodes.length === 0) return;

    const layer = new AtRule({ name: "layer", params: "lux-app" });
    nodes[0].before(layer);
    layer.append(nodes);
  },
});
layerAppStyles.postcss = true;

export default {
  plugins: [layerAppStyles(), (await import("autoprefixer")).default()],
};
