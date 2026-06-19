// next.config.mjs

/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  // Avoid Next.js picking the wrong workspace root on Windows
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
 
