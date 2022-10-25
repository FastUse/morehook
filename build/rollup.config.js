import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import pkg from "../package.json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import path from "path";

const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "packages/core/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    {
      name: "morehook",
      file: pkg.jsdelivr,
      format: "umd",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
    ts({
      tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      extensions,
    }),
  ],
  external: ["vue-demi", "vue", "vue-router"],
};
