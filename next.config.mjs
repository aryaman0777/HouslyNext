/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV="production";
const nextConfig = {
    basePath: isProd?"/HouslyNext" : "",
    output: "export",  // <=== enables static exports
    distDir: "dist",
};

export default nextConfig;