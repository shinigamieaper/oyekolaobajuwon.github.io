import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Enables static export for GitHub Pages
    reactStrictMode: true, // Improves debugging
};

export default withSentryConfig(
    nextConfig,
    {
        silent: true,
        org: "javascript-mastery",
        project: "javascript-nextjs",
    },
    {
        widenClientFileUpload: true,
        transpileClientSDK: true,
        hideSourceMaps: true,
        disableLogger: true,
        automaticVercelMonitors: true,
    }
);
