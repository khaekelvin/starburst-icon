import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    external: ["react", "react-dom"],
  },
  {
    entry: ["src/cli/index.ts"],
    format: ["cjs"],
    outExtension: () => ({ js: ".js" }),
    outDir: "dist/cli",
    clean: false,
    splitting: false,
    treeshake: true,
    banner: {
      js: "#!/usr/bin/env node",
    },
  },
]);