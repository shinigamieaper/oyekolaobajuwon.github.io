/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Keeps GitHub Pages working
    reactStrictMode: true,
    basePath: "/oyekolaobajuwon.github.io", // Important for GitHub Pages!
    images: {
        unoptimized: true, // Fixes image issues on GitHub Pages
    },
};

export default nextConfig;
