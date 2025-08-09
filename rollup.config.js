import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "esm",
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/index.cjs",
      format: "cjs",
      exports: "named",
    },
    plugins: [resolve(), commonjs()],
  },
];
