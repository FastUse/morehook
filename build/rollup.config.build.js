import { uglify } from "rollup-plugin-uglify";
import coreConfig from "./rollup.config.js";
import dts from "rollup-plugin-dts";

coreConfig.output.forEach((item) => {
  item.sourcemap = false;
});

// coreConfig.plugins = [...coreConfig.plugins];
coreConfig.plugins = [...coreConfig.plugins, uglify()];

export default [
  coreConfig,
  {
    input: "packages/core/index.ts",
    plugins: [dts()],
    output: {
      format: "esm",
      file: "dist/index.d.ts",
    },
  },
];
