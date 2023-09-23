import { defineConfig } from "tsup";

defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["index.ts", "./src/index.ts"],
  bundle: false,
  format: ["esm"],
  outDir: "dist",
  esbuildOptions: (options) => {
    options.outbase = "./";
  },
});
