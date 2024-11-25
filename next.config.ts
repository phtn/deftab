// import MillionLint from "@million/lint";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
};

export default config;

// export default next({
//   enabled: true,
//   rsc: true,
//   filter: {
//     include: "**/app/*.{tsx,ts}",
//     exclude: ["**/node_modules/**/*"],
//   },
// })(config);