import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execSync } from "child_process";

let commitHash;
try {
  // 깃 커밋해시 주입
  // build시에는 build 시점의 커밋 해시를 주입함.
  commitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch (e) {
  console.warn("Could not get commit hash");
  commitHash = "unknown";
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const BASE_URL = "/";
  const OUT_DIR = "./dist";
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@domain": path.resolve(__dirname, "./src/domain"),
        "@router": path.resolve(__dirname, "./src/router"),
        "@types": path.resolve(__dirname, "./src/types"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@global": path.resolve(__dirname, "./src/global"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
      },
    },
    define: {
      __COMMIT_HASH__: JSON.stringify(commitHash),
    },
    base: "/",
    build: {
      outDir: OUT_DIR,
    },
  };
});
