import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensions = [".js", ".ts", ".tsx"];

const iifeGlobals = {
  'vue-demi': 'VueDemi',
}

export default {
  input: "packages/core/index.ts",
  output: [
    {
      file: 'dist/index.cjs.js',
      format: "cjs",
      sourcemap: true,
      globals: iifeGlobals,
    },
    {
      file: 'dist/index.esm.js',
      format: "esm",
      sourcemap: true,
      globals: iifeGlobals,
    },
    {
      file: 'dist/index.umd.js',
      name: "morehook",
      format: "umd",
      sourcemap: true,
      globals: iifeGlobals,
    },
  ],
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: 'bundled'
    }),
    commonjs(),
    ts({
      tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      extensions,
    }),
  ],
  external: ["vue-demi", "vue", "vue-router"],
};
